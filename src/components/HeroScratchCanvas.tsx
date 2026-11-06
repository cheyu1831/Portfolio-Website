import React, { useEffect, useRef } from 'react';
import topImgSrc from '../assets/hero-character-top.jpg';
import underImgSrc from '../assets/hero-character-under.jpg';

interface HeroScratchCanvasProps {
  className?: string;
  onFirstScratch?: () => void;
}

interface Stamp {
  x: number;
  y: number;
  r: number;
  angle: number;
  stretch: number;
  born: number;
  seed: number;
  pts: Float32Array;
  holes: Float32Array[] | null;
}

export const HeroScratchCanvas: React.FC<HeroScratchCanvasProps> = ({
  className = '',
  onFirstScratch,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const underImgRef = useRef<HTMLImageElement>(null);
  const hasScratchedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const LIFE = 2.7;
    const BRUSH = 0.175;
    const SPACING = 0.09;
    const FOLLOW = 0.17;
    const N = 48;
    const TAU = Math.PI * 2;

    const top = new Image();
    let W = 0;
    let H = 0;
    let dpr = 1;
    let topReady = false;
    let dirty = true;
    let animId = 0;

    top.onload = () => {
      topReady = true;
      dirty = true;
    };
    top.src = topImgSrc;

    function resize() {
      if (!container || !canvas) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = container.clientWidth;
      H = container.clientHeight;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      dirty = true;
    }

    const ro = new ResizeObserver(() => {
      resize();
    });
    ro.observe(container);
    resize();

    // Pointer state
    let active = false;
    let tx = 0;
    let ty = 0;
    let sx = 0;
    let sy = 0;
    let lastX: number | null = null;
    let lastY: number | null = null;
    let ang = 0;
    let speedEMA = 0;
    const stamps: Stamp[] = [];

    function pos(e: PointerEvent): [number, number] {
      if (!container) return [0, 0];
      const r = container.getBoundingClientRect();
      return [e.clientX - r.left, e.clientY - r.top];
    }

    function enter(e: PointerEvent) {
      const [x, y] = pos(e);
      tx = sx = x;
      ty = sy = y;
      lastX = lastY = null;
      speedEMA = 0;
      active = true;

      if (!hasScratchedRef.current) {
        hasScratchedRef.current = true;
        onFirstScratch?.();
      }
    }

    function leave() {
      active = false;
      lastX = lastY = null;
    }

    function move(e: PointerEvent) {
      const [x, y] = pos(e);
      if (!active) enter(e);
      tx = x;
      ty = y;

      if (!hasScratchedRef.current) {
        hasScratchedRef.current = true;
        onFirstScratch?.();
      }
    }

    container.addEventListener('pointerenter', enter);
    container.addEventListener('pointerdown', enter);
    container.addEventListener('pointermove', move);
    container.addEventListener('pointerleave', leave);
    container.addEventListener('pointerup', leave);
    container.addEventListener('pointercancel', leave);

    // Procedural brush stamp
    function makeStamp(x: number, y: number, angle: number, stretch: number, now: number): Stamp {
      const seed = Math.random() * 100;
      const t = Math.random() * TAU;
      const r = new Float32Array(N);

      for (let i = 0; i < N; i++) {
        const a = (TAU * i) / N;
        r[i] =
          ((1 +
            0.085 * Math.sin(3 * a + t + seed) +
            0.048 * Math.sin(5 * a - t * 1.15 + seed * 2.1) +
            0.022 * Math.sin(9 * a + t * 0.6 + seed * 3.7)) *
            (1 + (Math.random() - 0.5) * 0.07)) /
          1.08;
      }

      const bump = (len: number, f: number) => {
        const s = (Math.random() * N) | 0;
        for (let j = 0; j < len; j++) {
          r[(s + j) % N] *= 1 - (1 - f) * Math.sin((Math.PI * (j + 0.5)) / len);
        }
      };

      for (let k = 0; k < 3; k++) {
        bump(3 + ((Math.random() * 4) | 0), 0.78 + Math.random() * 0.12);
      }
      for (let k = 0; k < 3; k++) {
        bump(2 + ((Math.random() * 3) | 0), 1.08 + Math.random() * 0.09);
      }

      const pts = new Float32Array(N * 2);
      for (let i = 0; i < N; i++) {
        const a = (TAU * i) / N;
        pts[2 * i] = Math.cos(a) * r[i];
        pts[2 * i + 1] = Math.sin(a) * r[i];
      }

      let holes: Float32Array[] | null = null;
      if (Math.random() < 0.45) {
        holes = [];
        const n = 1 + ((Math.random() * 3) | 0);
        for (let h = 0; h < n; h++) {
          const a = Math.random() * TAU;
          const d = 0.5 + Math.random() * 0.4;
          const cx = Math.cos(a) * d;
          const cy = Math.sin(a) * d;
          const lw = 0.09 + Math.random() * 0.15;
          const hh = 0.018 + Math.random() * 0.03;
          const M = 10;
          const hp = new Float32Array(M * 2);
          for (let k = 0; k < M; k++) {
            const b = (TAU * k) / M;
            const j = 1 + (Math.random() - 0.5) * 0.5;
            hp[2 * k] = cx + Math.cos(b) * lw * j;
            hp[2 * k + 1] = cy + Math.sin(b) * hh * j;
          }
          holes.push(hp);
        }
      }

      return {
        x,
        y,
        r: BRUSH * Math.min(W, H),
        angle,
        stretch,
        born: now,
        seed,
        pts,
        holes,
      };
    }

    function spline(P: Float32Array) {
      if (!ctx) return;
      const n = P.length / 2;
      ctx.moveTo(P[0], P[1]);
      for (let i = 0; i < n; i++) {
        const i0 = (i - 1 + n) % n;
        const i1 = i;
        const i2 = (i + 1) % n;
        const i3 = (i + 2) % n;
        ctx.bezierCurveTo(
          P[2 * i1] + (P[2 * i2] - P[2 * i0]) / 6,
          P[2 * i1 + 1] + (P[2 * i2 + 1] - P[2 * i0 + 1]) / 6,
          P[2 * i2] - (P[2 * i3] - P[2 * i1]) / 6,
          P[2 * i2 + 1] - (P[2 * i3 + 1] - P[2 * i1 + 1]) / 6,
          P[2 * i2],
          P[2 * i2 + 1]
        );
      }
      ctx.closePath();
    }

    function drawTop() {
      if (!ctx || !topReady) return;
      const iw = top.naturalWidth || 1671;
      const ih = top.naturalHeight || 941;
      const s = Math.max(W / iw, H / ih);
      const dw = iw * s;
      const dh = ih * s;
      ctx.drawImage(top, (W - dw) / 2, (H - dh) / 2, dw, dh);
    }

    let prev = performance.now();

    function frame(nowMs: number) {
      if (!ctx) return;
      const dt = Math.min(0.05, (nowMs - prev) / 1000);
      prev = nowMs;
      const now = nowMs / 1000;
      const R = BRUSH * Math.min(W, H);

      if (active) {
        const k = 1 - Math.pow(1 - FOLLOW, dt * 60);
        sx += (tx - sx) * k;
        sy += (ty - sy) * k;
        if (lastX === null || lastY === null) {
          lastX = sx;
          lastY = sy;
        }
        const sp = R * SPACING;
        let lx = lastX;
        let ly = lastY;
        const dx = sx - lx;
        const dy = sy - ly;
        let dist = Math.hypot(dx, dy);

        if (dist >= sp) {
          const target = Math.atan2(dy, dx);
          let diff = target - ang;
          diff = Math.atan2(Math.sin(diff), Math.cos(diff));
          const speed = dist / Math.max(dt, 0.001);
          speedEMA += (speed - speedEMA) * 0.2;
          const stretch = 1 + 0.24 * Math.min(1, speedEMA / (R * 6));
          ang += diff * 0.35;
          const ux = dx / dist;
          const uy = dy / dist;
          while (dist >= sp) {
            lx += ux * sp;
            ly += uy * sp;
            dist -= sp;
            stamps.push(makeStamp(lx, ly, ang, stretch, now));
          }
          lastX = lx;
          lastY = ly;
        } else {
          speedEMA *= 0.9;
        }
      }

      while (stamps.length && now - stamps[0].born >= LIFE) {
        stamps.shift();
        dirty = true;
      }

      if ((stamps.length || dirty) && topReady) {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.globalCompositeOperation = 'source-over';
        ctx.clearRect(0, 0, W, H);
        drawTop();
        ctx.globalCompositeOperation = 'destination-out';

        for (let i = 0; i < stamps.length; i++) {
          const st = stamps[i];
          const life = Math.max(0, 1 - (now - st.born) / LIFE);
          const rad = st.r * Math.pow(life, 0.85);
          if (rad < 0.5) continue;
          const c = Math.cos(st.angle);
          const s = Math.sin(st.angle);
          const sy2 = 1 / Math.pow(st.stretch, 0.35);

          ctx.setTransform(
            dpr * rad * st.stretch * c,
            dpr * rad * st.stretch * s,
            -dpr * rad * sy2 * s,
            dpr * rad * sy2 * c,
            st.x * dpr,
            st.y * dpr
          );
          ctx.beginPath();
          spline(st.pts);
          if (st.holes) {
            for (const h of st.holes) spline(h);
          }
          ctx.fill('evenodd');
        }

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.globalCompositeOperation = 'source-over';
        dirty = false;
      }

      animId = requestAnimationFrame(frame);
    }

    animId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      container.removeEventListener('pointerenter', enter);
      container.removeEventListener('pointerdown', enter);
      container.removeEventListener('pointermove', move);
      container.removeEventListener('pointerleave', leave);
      container.removeEventListener('pointerup', leave);
      container.removeEventListener('pointercancel', leave);
    };
  }, [onFirstScratch]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden select-none cursor-crosshair ${className}`}
      style={{ touchAction: 'none' }}
    >
      {/* Bottom Under Image: Revealed through scratch holes */}
      <img
        ref={underImgRef}
        src={underImgSrc}
        alt="Shreya Sonpavane Character - Revealed"
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />

      {/* Top Mask Canvas: Renders Top Image and applies destination-out stamps */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block pointer-events-none"
      />
    </div>
  );
};
