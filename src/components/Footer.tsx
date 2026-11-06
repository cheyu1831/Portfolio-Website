import React from 'react';
import { ArrowUp, Code2, Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-midnight border-t border-softBlush/10 py-12 text-warmWhite">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-softBlush/10">
          {/* Left Brand Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-sans font-bold text-lg tracking-tight text-warmWhite">
              SHREYA SONPAVANE V K
            </span>
            <span className="font-mono text-xs text-softBlush/80 mt-1">
              AI/ML Engineer • Python Developer • Software Engineer
            </span>
            <p className="text-xs text-warmWhite/50 mt-2 max-w-sm">
              Building intelligent systems. Turning ideas into meaningful technology.
            </p>
          </div>

          {/* Center Socials */}
          <div className="flex items-center gap-4">
            <a
              href={PROFILE.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              title="LeetCode (shreya1831)"
              className="p-2.5 rounded-xl bg-deepNavy hover:bg-mutedNavy border border-softBlush/10 text-warmWhite hover:text-amber-300 transition-colors"
            >
              <Code2 className="w-4 h-4" />
            </a>

            <a
              href={PROFILE.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="p-2.5 rounded-xl bg-deepNavy hover:bg-mutedNavy border border-softBlush/10 text-warmWhite hover:text-softBlush transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PROFILE.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="p-2.5 rounded-xl bg-deepNavy hover:bg-mutedNavy border border-softBlush/10 text-warmWhite hover:text-sky-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PROFILE.email}`}
              title="Direct Email"
              className="p-2.5 rounded-xl bg-deepNavy hover:bg-mutedNavy border border-softBlush/10 text-warmWhite hover:text-softBlush transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Scroll to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-deepNavy hover:bg-mutedNavy border border-softBlush/15 text-xs font-mono text-warmWhite/70 hover:text-warmWhite transition-all hover:scale-105 active:scale-95"
          >
            <span>Top of Page</span>
            <ArrowUp className="w-3.5 h-3.5 text-softBlush" />
          </button>
        </div>

        {/* Bottom Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-warmWhite/40">
          <div>
            © {new Date().getFullYear()} Shreya Sonpavane V K. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Engineered with React, TypeScript & Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
