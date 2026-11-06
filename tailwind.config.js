/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        midnight: '#0B0B14',
        deepNavy: '#0D1426',
        mutedNavy: '#1B253E',
        surfaceNavy: '#131B33',
        cardNavy: '#10182E',
        borderNavy: '#1F2C4C',
        softBlush: {
          DEFAULT: '#F5E6E9',
          50: '#FAF2F4',
          100: '#F5E6E9',
          200: '#ECCBD2',
          300: '#E0A8B4',
          400: '#D17C8E',
          500: '#BC566C',
        },
        warmWhite: {
          DEFAULT: '#F8F6F5',
          muted: '#C8CAD0',
          subtle: '#8C93A4',
        },
      },
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        serif: [
          'Playfair Display',
          'Cinzel',
          'Georgia',
          'serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'Consolas',
          'monospace',
        ],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.2em',
        mega: '0.35em',
      },
      boxShadow: {
        'glow-blush': '0 0 25px -5px rgba(245, 230, 233, 0.15)',
        'glow-navy': '0 10px 30px -10px rgba(13, 20, 38, 0.8)',
        'card-subtle': '0 4px 20px -2px rgba(11, 11, 20, 0.7), 0 0 0 1px rgba(245, 230, 233, 0.06)',
        'card-hover': '0 12px 36px -4px rgba(11, 11, 20, 0.9), 0 0 0 1px rgba(245, 230, 233, 0.16)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}

