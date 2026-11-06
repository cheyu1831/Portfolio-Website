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
    const subject = encodeURIComponent(formData.subject.trim() || `Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-32 sm:py-40 bg-midnight border-t border-borderNavy/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2.5 mb-3.5">
            <span className="font-mono text-xs text-cyan-400 font-medium">
              07
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-medium">
              // Get In Touch
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-mono">
            LET'S BUILD SOMETHING GREAT.
          </h2>

          <p className="mt-3.5 text-slate-400 text-sm sm:text-base leading-relaxed font-mono">
            Available for AI/ML Engineer, Python Developer, and Software Engineer opportunities. Let's discuss system architecture, federated models, or engineering roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Info & Professional Links */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45 }}
              className="p-7 rounded-xl bg-deepNavy border border-borderNavy"
            >
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                Direct Email
              </h3>

              <div className="p-3.5 rounded-lg bg-midnight border border-borderNavy flex items-center justify-between gap-3">
                <span className="font-mono text-xs sm:text-sm text-cyan-300 truncate">
                  {PROFILE.email}
                </span>
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-md bg-deepNavy hover:bg-mutedNavy text-white text-xs font-mono flex items-center gap-1.5 transition-colors shrink-0 border border-borderNavy"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Copy</span>
                    </>
                  )}
                </motion.button>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-slate-400 font-mono">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>{PROFILE.location} • Open to Remote & Hybrid Roles</span>
              </div>
            </motion.div>

            {/* Professional Profiles */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="p-7 rounded-xl bg-deepNavy border border-borderNavy"
            >
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                Developer Profiles
              </h3>

              <div className="space-y-3">
                {/* LeetCode Profile */}
                <motion.a
                  whileHover={{ y: -1 }}
                  href={PROFILE.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-lg bg-midnight hover:bg-mutedNavy/50 border border-borderNavy hover:border-cyan-500/30 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-deepNavy border border-borderNavy text-amber-400">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors font-mono">
                        LeetCode Profile
                      </div>
                      <div className="text-[11px] font-mono text-slate-400">
                        leetcode.com/u/shreya1831/
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </motion.a>

                {/* LinkedIn Profile */}
                <motion.a
                  whileHover={{ y: -1 }}
                  href={PROFILE.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-lg bg-midnight hover:bg-mutedNavy/50 border border-borderNavy hover:border-blue-500/30 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-deepNavy border border-borderNavy text-blue-400">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-blue-300 transition-colors font-mono">
                        LinkedIn
                      </div>
                      <div className="text-[11px] font-mono text-slate-400">
                        Connect Professionally
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 transition-colors" />
                </motion.a>

                {/* GitHub Profile */}
                <motion.a
                  whileHover={{ y: -1 }}
                  href={PROFILE.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-lg bg-midnight hover:bg-mutedNavy/50 border border-borderNavy hover:border-cyan-500/30 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-deepNavy border border-borderNavy text-slate-200">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors font-mono">
                        GitHub
                      </div>
                      <div className="text-[11px] font-mono text-slate-400">
                        Open-Source Repositories
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45 }}
              className="rounded-xl bg-deepNavy border border-borderNavy p-7 sm:p-9"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-borderNavy">
                <div className="flex items-center gap-2 text-xs font-semibold text-white font-mono uppercase tracking-wider">
                  <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Send Message</span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">
                  Direct Dispatch
                </span>
              </div>

              {errorMsg && (
                <div className="mb-4 p-3 rounded-lg bg-rose-950/40 border border-rose-500/30 text-rose-300 text-xs font-mono flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {submitted && (
                <div className="mb-4 p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Your email client was triggered with your message pre-populated.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-midnight border border-borderNavy text-white text-xs font-mono focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-midnight border border-borderNavy text-white text-xs font-mono focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Engineering Role / Project Inquiry"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-midnight border border-borderNavy text-white text-xs font-mono focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Shreya, I'd like to discuss..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-midnight border border-borderNavy text-white text-xs font-mono focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] font-mono text-slate-500 text-center sm:text-left">
                    Direct dispatch via mailto to shreyavk18@gmail.com
                  </p>

                  <motion.button
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.96 }}
                    type="submit"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs font-mono tracking-wide uppercase transition-colors flex items-center justify-center gap-2 shrink-0 shadow-sm"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
