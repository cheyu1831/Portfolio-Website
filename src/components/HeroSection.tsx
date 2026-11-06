
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  Sparkles,
  Mail,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Code2,
} from 'lucide-react';
import { HeroScratchCanvas } from './HeroScratchCanvas';
import { PROFILE } from '../data/profile';

export const HeroSection: React.FC = () => {
  const [scratched, setScratched] = useState(false);

  const socialProfiles = [
    {
      label: 'GitHub',
      href: PROFILE.socials.github,
      icon: <Github className="w-4 h-4" />,
    },
    {
      label: 'LeetCode',
      href: PROFILE.socials.leetcode,
      icon: <Code2 className="w-4 h-4" />,
    },
    {
      label: 'LinkedIn',
      href: PROFILE.socials.linkedin,
      icon: <Linkedin className="w-4 h-4" />,
    },
  ];

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[680px] overflow-hidden bg-midnight"
    >
      {/* Background Interactive Scratch Canvas */}
      <div className="absolute inset-0 z-0">
        <HeroScratchCanvas
          onFirstScratch={() => setScratched(true)}
        />
      </div>

      {/* Atmospheric Vignette for readability */}
      <div className="absolute inset-0 z-1 pointer-events-none bg-gradient-to-r from-midnight/95 via-midnight/70 to-transparent sm:w-3/4 md:w-3/5 lg:w-1/2" />
      <div className="absolute inset-x-0 bottom-0 h-32 z-1 pointer-events-none bg-gradient-to-t from-midnight via-midnight/80 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-24 z-1 pointer-events-none bg-gradient-to-b from-midnight/70 to-transparent" />
      {/* Foreground UI Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between px-6 sm:px-12 md:px-16 lg:px-24 pt-28 pb-10 max-w-7xl mx-auto">

        {/* Top Minimal Scratch Hint */}
        {/* <div className="flex items-center">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono tracking-normal transition-opacity duration-300 pointer-events-auto border border-borderNavy bg-deepNavy/80 backdrop-blur-sm text-slate-300 ${
              scratched
                ? 'opacity-30 hover:opacity-90'
                : 'opacity-85'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Move cursor or scratch to interact</span>
          </motion.div>
        </div> */}

        {/* Hero Central Content */}
        <div className="w-full py-6 my-auto">

          {/* Hero Text Content */}
          <div className="max-w-2xl">

            {/* Eyebrow / Role Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="flex items-center gap-2.5 mb-4"
            >
              <span className="text-xs font-mono text-cyan-400 font-medium">
                // AI/ML ENGINEER & PYTHON DEVELOPER
              </span>
            </motion.div>

            {/* Primary Focal Point: Name */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight font-mono"
            >
              SHREYA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-blue-200">
                SONPAVANE V K
              </span>
            </motion.h1>

            {/* Role Subtitle & Statement */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-10 max-w-xl font-mono"
            >
              Building intelligent systems. Turning ideas into meaningful technology.
            </motion.p>

          </div>

          {/* CTA Buttons + Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full flex flex-wrap items-center gap-4 pointer-events-auto"
          >

            {/* Explore My Work */}
            <motion.a
              href="#projects"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-mono font-medium text-xs tracking-wide transition-colors shadow-sm"
            >
              <span>Explore My Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>

            {/* Resume PDF */}
            <motion.a
              href="/shreya-resume.pdf"
              download="Shreya_Sonpavane_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-deepNavy/80 hover:bg-mutedNavy text-slate-200 border border-borderNavy hover:border-blue-400/50 font-mono font-medium text-xs tracking-wide transition-colors backdrop-blur-sm"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Resume PDF</span>
            </motion.a>

            {/* Get In Touch */}
            <motion.a
              href="#contact"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-3 text-slate-300 hover:text-white rounded-md text-xs font-mono transition-colors"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              <span>Get In Touch</span>
            </motion.a>

            {/* Social Icons - Right Aligned */}
            <div
              className="flex items-center gap-3 ml-auto"
              aria-label="Social profiles"
            >
              {socialProfiles.map(({ label, href, icon }) =>
                href ? (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} profile`}
                    title={`${label} profile`}
                    whileHover={{ y: -3, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-lg text-slate-400 hover:text-cyan-300 bg-deepNavy/100 border border-deepNavy/100 hover:border-cyan-400/50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
                  >
                    {icon}
                  </motion.a>
                ) : (
                  <span
                    key={label}
                    aria-label={`${label} profile URL unavailable`}
                    title={`${label} profile URL unavailable`}
                    className="p-3 rounded-lg text-slate-600 bg-deepNavy/50 border border-borderNavy/50"
                  >
                    {icon}
                  </span>
                )
              )}
            </div>

          </motion.div>
        </div>

        {/* Bottom Bar: Scroll Indicator & Minimal Status */}
        <div className="flex items-center justify-between pt-6 border-t border-borderNavy/60">

          {/* Scroll Indicator */}
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors pointer-events-auto group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />

            <span>Scroll to explore</span>

            <ArrowDown className="w-3.5 h-3.5 text-cyan-400/80 group-hover:translate-y-0.5 transition-transform" />
          </motion.a>

          {/* Location & Availability */}
          <div className="ml-auto flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4 text-xs font-mono text-slate-500">
              <span>Chennai, IN</span>

              <span>•</span>

              <span>FastAPI & Python</span>

              <span>•</span>

              <span className="text-cyan-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Open to Opportunities
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
