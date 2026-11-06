import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Cpu, Network, Sparkles } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { PROFILE } from '../data/profile';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-midnight border-t border-mutedNavy/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        <SectionHeading
          number="01"
          eyebrow="Profile & Philosophy"
          title="Engineering Intelligent Systems with Purpose."
          subtitle="Specializing in privacy-preserving machine learning, high-performance Python backends, and applied AI systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative & Focus Areas */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-base sm:text-lg text-warmWhite/85 leading-relaxed space-y-4"
            >
              <p>
                I'm a <span className="text-softBlush font-semibold">Python Developer and aspiring AI/ML Engineer</span> passionate about building intelligent applications and scalable backend systems. My experience includes developing backend solutions using <span className="text-warmWhite font-medium underline decoration-softBlush/40 underline-offset-4">FastAPI</span> at Hexaware Technologies, working with machine learning models, and exploring privacy-preserving AI through <span className="text-warmWhite font-medium underline decoration-softBlush/40 underline-offset-4">Federated Learning</span>.
              </p>

              <p>
                I enjoy solving practical engineering problems, from building REST APIs and integrating databases to experimenting with neural networks, data processing, and <span className="text-warmWhite font-medium underline decoration-softBlush/40 underline-offset-4">Generative AI</span>.
              </p>

              <p className="text-warmWhite/75 text-sm sm:text-base">
                My goal is to develop reliable, efficient, and maintainable software that turns complex technical ideas into useful real-world solutions.
              </p>
            </motion.div>
            {/* Core Pillars / Problem-Solving Approach */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-deepNavy/70 border border-softBlush/10 hover:border-softBlush/25 transition-all">
                <div className="flex items-center gap-3 mb-2 text-softBlush">
                  <Shield className="w-5 h-5 text-softBlush" />
                  <h4 className="font-semibold text-sm text-warmWhite">Privacy-Preserving AI</h4>
                </div>
                <p className="text-xs text-warmWhite/70 leading-relaxed">
                  Decentralized model training via Federated Learning and Differential Privacy, protecting sensitive financial and user datasets.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-deepNavy/70 border border-softBlush/10 hover:border-softBlush/25 transition-all">
                <div className="flex items-center gap-3 mb-2 text-softBlush">
                  <Cpu className="w-5 h-5 text-softBlush" />
                  <h4 className="font-semibold text-sm text-warmWhite">Robust Backend Architecture</h4>
                </div>
                <p className="text-xs text-warmWhite/70 leading-relaxed">
                  Asynchronous REST microservices with FastAPI, Pydantic type safety, scalable messaging, and relational database schemas.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-deepNavy/70 border border-softBlush/10 hover:border-softBlush/25 transition-all">
                <div className="flex items-center gap-3 mb-2 text-softBlush">
                  <Network className="w-5 h-5 text-softBlush" />
                  <h4 className="font-semibold text-sm text-warmWhite">Applied Machine Learning</h4>
                </div>
                <p className="text-xs text-warmWhite/70 leading-relaxed">
                  Practical end-to-end model pipelines using PyTorch, TensorFlow, Scikit-learn, Computer Vision, and Generative AI.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-deepNavy/70 border border-softBlush/10 hover:border-softBlush/25 transition-all">
                <div className="flex items-center gap-3 mb-2 text-softBlush">
                  <Sparkles className="w-5 h-5 text-softBlush" />
                  <h4 className="font-semibold text-sm text-warmWhite">Continuous Innovation</h4>
                </div>
                <p className="text-xs text-warmWhite/70 leading-relaxed">
                  Leadership as Secretary of DevDynasty Technical Club, active hackathon prototyping, and research paper presentations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Profile Console Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-deepNavy/90 border border-softBlush/15 p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden"
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-softBlush/10 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 font-mono text-xs text-warmWhite/50">engineer_profile.py</span>
                </div>
                <Terminal className="w-4 h-4 text-softBlush/60" />
              </div>

              {/* Code Snippet */}
              <div className="font-mono text-xs space-y-3 leading-relaxed">
                <div>
                  <span className="text-softBlush">class</span>{' '}
                  <span className="text-warmWhite font-bold">ShreyaSonpavane</span>:
                </div>
                <div className="pl-4 space-y-1 text-warmWhite/70">
                  <div>
                    <span className="text-mutedNavy-300 text-warmWhite/50"># Identity & Credentials</span>
                  </div>
                  <div>
                    <span className="text-softBlush/80">education</span> ={' '}
                    <span className="text-emerald-300">"B.Tech Information Technology"</span>
                  </div>
                  <div>
                    <span className="text-softBlush/80">institution</span> ={' '}
                    <span className="text-emerald-300">"Meenakshi Sundararajan Eng. College"</span>
                  </div>
                  <div>
                    <span className="text-softBlush/80">internships</span> = [
                    <span className="text-emerald-300">"Hexaware Technologies"</span>,{' '}
                    <span className="text-emerald-300">"Intelizign"</span>]
                  </div>
                  <div>
                    <span className="text-softBlush/80">club_role</span> ={' '}
                    <span className="text-emerald-300">"Secretary @ DevDynasty"</span>
                  </div>
                  <div>
                    <span className="text-softBlush/80">core_stack</span> = [
                    <span className="text-amber-300">"Python"</span>,{' '}
                    <span className="text-amber-300">"FastAPI"</span>,{' '}
                    <span className="text-amber-300">"TensorFlow"</span>,{' '}
                    <span className="text-amber-300">"Flower"</span>]
                  </div>
                  <div className="pt-2">
                    <span className="text-softBlush/80">current_mission</span> ={' '}
                    <span className="text-warmWhite/90">
                      "Building privacy-first AI & resilient cloud microservices."
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Quick Facts Footer */}
              <div className="mt-6 pt-5 border-t border-softBlush/10 grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-warmWhite/50">
                    Primary Domain
                  </span>
                  <span className="font-semibold text-sm text-softBlush">
                    AI/ML & Python Backend
                  </span>
                </div>
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-warmWhite/50">
                    LeetCode
                  </span>
                  <a
                    href={PROFILE.socials.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-warmWhite hover:text-softBlush underline decoration-softBlush/30"
                  >
                    @shreya1831
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
