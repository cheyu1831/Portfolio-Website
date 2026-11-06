import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Code2, 
  MapPin, 
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { PROFILE } from '../data/profile';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields before dispatching.');
      return;
    }

    setErrorMsg('');
    // Genuine dispatch via mailto protocol so transmission is authentic without a mock server
    const subject = encodeURIComponent(formData.subject.trim() || `Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-midnight border-t border-mutedNavy/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="font-mono text-xs text-softBlush/70 font-semibold tracking-wider">
              [07]
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-softBlush font-medium">
              Get In Touch
            </span>
            <span className="w-6 h-[1px] bg-softBlush/40" />
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-warmWhite font-sans">
            LET'S BUILD SOMETHING GREAT.
          </h2>

          <p className="mt-4 text-warmWhite/70 text-base sm:text-lg leading-relaxed font-normal">
            Available for AI/ML Engineer, Python Developer, and Software Engineer opportunities. Let's discuss system architecture, federated models, or engineering roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Info & Professional Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-deepNavy border border-softBlush/15 shadow-card-subtle">
              <h3 className="text-base font-semibold text-warmWhite font-sans mb-4 flex items-center gap-2">
                <Mail className="w-4 h-4 text-softBlush" />
                Direct Email Dispatch
              </h3>

              <div className="p-3.5 rounded-xl bg-midnight/80 border border-softBlush/10 flex items-center justify-between gap-3">
                <span className="font-mono text-xs sm:text-sm text-softBlush truncate">
                  {PROFILE.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-mutedNavy hover:bg-mutedNavy/80 text-warmWhite text-xs font-mono flex items-center gap-1.5 transition-colors shrink-0 border border-softBlush/20"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-softBlush" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-warmWhite/50 font-mono">
                <MapPin className="w-3.5 h-3.5 text-softBlush/70" />
                <span>{PROFILE.location} • Open to Remote & Hybrid Roles</span>
              </div>
            </div>

            {/* Professional Profiles */}
            <div className="p-6 rounded-2xl bg-deepNavy border border-softBlush/15 shadow-card-subtle">
              <h3 className="text-xs font-mono uppercase tracking-wider text-warmWhite/60 mb-4">
                Verified Developer Profiles
              </h3>

              <div className="space-y-3">
                {/* LeetCode Profile */}
                <a
                  href={PROFILE.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-midnight/60 hover:bg-mutedNavy/40 border border-softBlush/10 hover:border-softBlush/30 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-deepNavy border border-softBlush/10 text-amber-300">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-warmWhite group-hover:text-softBlush transition-colors">
                        LeetCode Profile
                      </div>
                      <div className="text-xs font-mono text-warmWhite/50">
                        leetcode.com/u/shreya1831/
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-warmWhite/40 group-hover:text-softBlush transition-colors" />
                </a>

                {/* LinkedIn Profile */}
                <a
                  href={PROFILE.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-midnight/60 hover:bg-mutedNavy/40 border border-softBlush/10 hover:border-softBlush/30 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-deepNavy border border-softBlush/10 text-sky-400">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-warmWhite group-hover:text-softBlush transition-colors">
                        LinkedIn
                      </div>
                      <div className="text-xs font-mono text-warmWhite/50">
                        Connect Professionally
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-warmWhite/40 group-hover:text-softBlush transition-colors" />
                </a>

                {/* GitHub Profile */}
                <a
                  href={PROFILE.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-midnight/60 hover:bg-mutedNavy/40 border border-softBlush/10 hover:border-softBlush/30 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-deepNavy border border-softBlush/10 text-warmWhite">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-warmWhite group-hover:text-softBlush transition-colors">
                        GitHub
                      </div>
                      <div className="text-xs font-mono text-warmWhite/50">
                        Open-Source Repositories
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-warmWhite/40 group-hover:text-softBlush transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-deepNavy border border-softBlush/15 p-6 sm:p-8 shadow-card-subtle"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-softBlush/10">
                <div className="flex items-center gap-2 text-sm font-semibold text-warmWhite">
                  <MessageSquare className="w-4 h-4 text-softBlush" />
                  <span>Send a Message</span>
                </div>
                <span className="text-[11px] font-mono text-softBlush/80">
                  Standard Transmission
                </span>
              </div>

              {errorMsg && (
                <div className="mb-4 p-3 rounded-xl bg-rose-950/40 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {submitted && (
                <div className="mb-4 p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Your email client was triggered with your message pre-populated.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-warmWhite/70 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-midnight/80 border border-softBlush/15 text-warmWhite text-sm focus:outline-none focus:border-softBlush transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-warmWhite/70 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-midnight/80 border border-softBlush/15 text-warmWhite text-sm focus:outline-none focus:border-softBlush transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-warmWhite/70 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Engineering Role / Project Collaboration"
                    className="w-full px-4 py-2.5 rounded-xl bg-midnight/80 border border-softBlush/15 text-warmWhite text-sm focus:outline-none focus:border-softBlush transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-warmWhite/70 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Shreya, I'd like to discuss an opportunity regarding..."
                    className="w-full px-4 py-2.5 rounded-xl bg-midnight/80 border border-softBlush/15 text-warmWhite text-sm focus:outline-none focus:border-softBlush transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] font-mono text-warmWhite/40 text-center sm:text-left">
                    Authentic mailto dispatch: Triggers direct correspondence to shreyavk18@gmail.com
                  </p>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-softBlush text-midnight font-semibold text-xs tracking-wider uppercase hover:bg-white transition-all shadow-glow-blush flex items-center justify-center gap-2 shrink-0 active:scale-95"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

