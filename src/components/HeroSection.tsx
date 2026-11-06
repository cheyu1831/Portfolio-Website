import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Terminal, Mail, ArrowUpRight } from 'lucide-react';
import { HeroScratchCanvas } from './HeroScratchCanvas';

export const HeroSection: React.FC = () => {
  const [scratched, setScratched] = useState(false);

  return (
    <section id="hero" className="relative w-full h-screen min-h-[680px] overflow-hidden bg-midnight">
      {/* Background Interactive Scratch Canvas */}
      <div className="absolute inset-0 z-0">
        <HeroScratchCanvas onFirstScratch={() => setScratched(true)} />
      </div>

      {/* Atmospheric Vignette & Gradients to guarantee editorial contrast */}
      <div className="absolute inset-0 z-1 pointer-events-none bg-gradient-to-r from-midnight/95 via-midnight/65 to-transparent sm:w-3/4 md:w-3/5 lg:w-1/2" />
      <div className="absolute inset-x-0 bottom-0 h-40 z-1 pointer-events-none bg-gradient-to-t from-midnight via-midnight/70 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-28 z-1 pointer-events-none bg-gradient-to-b from-midnight/80 to-transparent" />

      {/* Foreground UI Layer - pointer-events-none with pointer-events-auto for interactive items */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between px-6 sm:px-12 md:px-16 lg:px-24 pt-28 pb-8 max-w-7xl mx-auto">
        {/* Top Spacer / Interactive Scratch Indicator */}
        {/* <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wide transition-opacity duration-700 pointer-events-auto border border-softBlush/20 bg-deepNavy/80 backdrop-blur-md text-softBlush ${
              scratched ? 'opacity-40 hover:opacity-100' : 'opacity-90 animate-pulse-subtle'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-softBlush" />
            <span>Interactive: Scratch or move cursor anywhere to reveal layer</span>
          </motion.div>
        </div> */}

        {/* Hero Central Typography */}
        <div className="max-w-2xl py-6 my-auto">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-[1px] bg-softBlush/60" />
            <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-softBlush/90 font-medium">
              AI/ML Engineer & Python Developer
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-warmWhite mb-6 leading-[1.08] font-sans"
          >
            SHREYA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-warmWhite via-softBlush to-softBlush/80">
              SONPAVANE V K
            </span>
          </motion.h1>

          {/* Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="text-base sm:text-lg lg:text-xl text-warmWhite/80 font-normal leading-relaxed mb-8 max-w-xl"
          >
            Building intelligent systems. Turning ideas into meaningful technology.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-wrap items-center gap-4 pointer-events-auto"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-softBlush text-midnight font-semibold text-sm tracking-wide shadow-glow-blush transition-all duration-300 hover:bg-white hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore My Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-deepNavy/80 hover:bg-mutedNavy text-warmWhite border border-softBlush/20 font-medium text-sm tracking-wide transition-all duration-300 hover:border-softBlush/50 hover:scale-[1.02] active:scale-[0.98] backdrop-blur-md"
            >
              <Mail className="w-4 h-4 text-softBlush" />
              <span>Get In Touch</span>
            </a>

            <a
              href="#about"
              className="inline-flex items-center gap-2 px-4 py-3.5 text-warmWhite/70 hover:text-warmWhite text-sm font-mono transition-colors"
            >
              <Terminal className="w-4 h-4 text-softBlush/70" />
              <span>Read Bio</span>
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar: Scroll Indicator & Quick Facts */}
        <div className="flex items-center justify-between pt-4 border-t border-softBlush/10">
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="inline-flex items-center gap-2 text-xs font-mono text-warmWhite/60 hover:text-softBlush transition-colors pointer-events-auto group"
          >
            <span className="w-2 h-2 rounded-full bg-softBlush/70 group-hover:scale-125 transition-transform" />
            <span>Scroll to explore</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-softBlush/80" />
          </motion.a>

          <div className="hidden md:flex items-center gap-6 text-xs font-mono text-warmWhite/50">
            <span>Chennai, India</span>
            <span>•</span>
            <span>FastAPI & Federated Learning</span>
            <span>•</span>
            <span className="text-softBlush/80">Available for Opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
};

