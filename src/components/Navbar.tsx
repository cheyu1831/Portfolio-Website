import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-midnight/90 backdrop-blur-md border-b border-borderNavy/70 py-3.5 shadow-sm'
          : 'bg-transparent py-5 sm:py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 flex items-center justify-between">
        {/* Monogram / Brand */}
        <a
          href="#hero"
          className="group flex items-center gap-3 text-white transition-colors"
        >
          <div className="w-8 h-8 rounded-md border border-blue-500/30 overflow-hidden flex items-center justify-center group-hover:border-blue-400 transition-colors">
            <img
              src="/images/logo.png"
              alt="Shreya Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-white group-hover:text-blue-400 transition-colors font-mono">
              shreya.dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-lg bg-deepNavy/70 border border-borderNavy/80 backdrop-blur-md">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-1.5 text-xs font-mono tracking-wide transition-colors rounded-md ${isActive
                    ? 'text-cyan-300 font-medium'
                    : 'text-slate-400 hover:text-white'
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-blue-950/60 rounded-md border border-blue-500/30 -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Resume Download Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="/shreya-resume.pdf"
            download="Shreya_Sonpavane_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="Download Shreya Sonpavane's Resume (PDF)"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-medium tracking-wide transition-all active:scale-95 shadow-sm hover:shadow-blue-500/20 hover:-translate-y-0.5"
          >
            <Download className="w-3.5 h-3.5 text-blue-100" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="xl:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-deepNavy border border-borderNavy/80 transition-colors"
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
            transition={{ duration: 0.2 }}
            className="xl:hidden bg-deepNavy/95 border-b border-borderNavy/90 backdrop-blur-xl px-6 py-5"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-mono py-2.5 px-3 rounded-md transition-colors ${activeSection === item.href.substring(1)
                      ? 'text-cyan-300 bg-blue-950/60 font-medium border border-blue-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-mutedNavy/40'
                    }`}
                >
                  {item.label}
                </a>
              ))}

              <div className="pt-4 border-t border-borderNavy/80 flex flex-col gap-2.5 mt-2">
                <a
                  href="/shreya-resume.pdf"
                  download="Shreya_Sonpavane_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-medium tracking-wide transition-all shadow-sm"
                >
                  <Download className="w-4 h-4 text-blue-100" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
