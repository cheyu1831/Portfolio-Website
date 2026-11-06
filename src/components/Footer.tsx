import React from 'react';
import { ArrowUp, Code2, Github, Linkedin, Mail, Download } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-midnight border-t border-borderNavy/60 py-12 text-slate-300 font-mono">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-borderNavy">
          {/* Left Brand Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-bold text-base tracking-tight text-white font-mono">
              SHREYA SONPAVANE V K
            </span>
            <span className="text-xs text-cyan-400 mt-1">
              AI/ML Engineer • Python Developer • Software Engineer
            </span>
            <p className="text-xs text-slate-500 mt-2 max-w-sm">
              Building intelligent systems. Turning ideas into meaningful technology.
            </p>
          </div>

          {/* Center Socials & Resume */}
          <div className="flex items-center gap-3">
            <a
              href={PROFILE.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              title="LeetCode (shreya1831)"
              className="p-2.5 rounded-md bg-deepNavy hover:bg-mutedNavy border border-borderNavy text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Code2 className="w-4 h-4" />
            </a>

            <a
              href={PROFILE.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="p-2.5 rounded-md bg-deepNavy hover:bg-mutedNavy border border-borderNavy text-slate-300 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PROFILE.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="p-2.5 rounded-md bg-deepNavy hover:bg-mutedNavy border border-borderNavy text-slate-300 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PROFILE.email}`}
              title="Direct Email"
              className="p-2.5 rounded-md bg-deepNavy hover:bg-mutedNavy border border-borderNavy text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href="/shreya-resume.pdf"
              download="Shreya_Sonpavane_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="Download Resume (PDF)"
              className="p-2.5 rounded-md bg-deepNavy hover:bg-mutedNavy border border-borderNavy text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <Download className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Scroll to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-md bg-deepNavy hover:bg-mutedNavy border border-borderNavy text-xs font-mono text-slate-400 hover:text-white transition-colors active:scale-95"
          >
            <span>Top of Page</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

        {/* Bottom Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Shreya Sonpavane V K. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with React, TypeScript & Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
