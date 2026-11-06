import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Code2 } from 'lucide-react';
import { PROFILE } from '../data/profile';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Determine active section based on scroll position
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-midnight/85 backdrop-blur-md border-b border-softBlush/10 py-3.5 shadow-glow-navy'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 flex items-center justify-between">
        {/* Monogram / Brand */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 text-warmWhite hover:text-softBlush transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-deepNavy border border-softBlush/20 flex items-center justify-center font-mono text-xs font-bold text-softBlush group-hover:border-softBlush/50 transition-colors shadow-sm">
            SV
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-warmWhite group-hover:text-softBlush transition-colors">
              SHREYA
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-warmWhite/50">
              AI / ML & Python
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-deepNavy/60 border border-softBlush/10 backdrop-blur-md">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors rounded-full ${
                  isActive
                    ? 'text-softBlush font-semibold'
                    : 'text-warmWhite/70 hover:text-warmWhite'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-mutedNavy/80 rounded-full border border-softBlush/25 -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA / External Quick Links */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={PROFILE.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            title="LeetCode Profile: shreya1831"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-warmWhite/70 hover:text-softBlush border border-softBlush/10 hover:border-softBlush/30 transition-all bg-deepNavy/40"
          >
            <Code2 className="w-3.5 h-3.5 text-softBlush" />
            <span>LeetCode</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>

          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-softBlush text-midnight text-xs font-semibold tracking-wide hover:bg-white transition-all shadow-sm active:scale-95"
          >
            Connect
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded-lg text-warmWhite/80 hover:text-warmWhite hover:bg-deepNavy border border-softBlush/10 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-deepNavy/95 border-b border-softBlush/15 backdrop-blur-xl px-6 py-6"
          >
            <div className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-mono uppercase tracking-wider py-2 px-3 rounded-md transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'text-softBlush bg-mutedNavy/50 font-semibold'
                      : 'text-warmWhite/70 hover:text-warmWhite hover:bg-mutedNavy/30'
                  }`}
                >
                  {item.label}
                </a>
              ))}

              <div className="pt-4 border-t border-softBlush/10 flex flex-col gap-3">
                <a
                  href={PROFILE.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs font-mono text-warmWhite/80 py-2 px-3 rounded bg-mutedNavy/40"
                >
                  <span className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-softBlush" />
                    LeetCode Profile (shreya1831)
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-lg bg-softBlush text-midnight text-xs font-bold tracking-wide"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

