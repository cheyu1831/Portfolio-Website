import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Cpu, Network, Sparkles } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { PROFILE } from '../data/profile';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-32 sm:py-40 bg-midnight border-t border-borderNavy/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        <SectionHeading
          number="01"
          eyebrow="Profile & Background"
          title="Engineering Practical Intelligent Systems"
          subtitle="Experienced in backend architecture, privacy-preserving machine learning, and full-stack software development."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative & Focus Areas */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm sm:text-base text-slate-300 leading-relaxed space-y-4 font-mono"
            >
              <p>
                I am a <span className="text-cyan-400 font-medium">Python Developer and aspiring AI/ML Engineer</span> focused on building intelligent applications and scalable backend systems. My experience spans developing backend services using <span className="text-white font-medium">FastAPI</span> at Hexaware Technologies, training machine learning models, and exploring privacy-preserving AI with <span className="text-white font-medium">Federated Learning</span>.
              </p>

              <p>
                I focus on solving concrete engineering challenges: designing robust asynchronous REST APIs, structuring relational databases, experimenting with neural networks, and developing evidence-grounded <span className="text-white font-medium">Generative AI</span> workflows.
              </p>

              <p className="text-slate-400">
                My objective is to build clean, maintainable, and reliable software that bridges theoretical machine learning with production environments.
              </p>
            </motion.div>

            {/* Core Pillars Grid */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-deepNavy/80 border border-borderNavy hover:border-blue-500/30 transition-all">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <Shield className="w-4 h-4 text-cyan-400" />
                  <h4 className="font-semibold text-sm text-white font-mono">Privacy-Preserving AI</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-mono">
                  Decentralized model training via Federated Learning (Flower) and Differential Privacy guarantees.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-deepNavy/80 border border-borderNavy hover:border-blue-500/30 transition-all">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <Cpu className="w-4 h-4 text-blue-400" />
                  <h4 className="font-semibold text-sm text-white font-mono">Backend Architecture</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-mono">
                  Asynchronous REST microservices with FastAPI, Pydantic type safety, and relational database schemas.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-deepNavy/80 border border-borderNavy hover:border-blue-500/30 transition-all">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <Network className="w-4 h-4 text-cyan-400" />
                  <h4 className="font-semibold text-sm text-white font-mono">Applied Machine Learning</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-mono">
                  End-to-end pipelines using PyTorch, TensorFlow, Scikit-learn, Computer Vision, and RAG architectures.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-deepNavy/80 border border-borderNavy hover:border-blue-500/30 transition-all">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <h4 className="font-semibold text-sm text-white font-mono">Technical Leadership</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-mono">
                  Secretary of DevDynasty Technical Club, active hackathon prototyping, and research paper presentations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Profile Console Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-xl bg-deepNavy border border-borderNavy p-6 shadow-sm relative overflow-hidden"
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-borderNavy mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <span className="ml-2 font-mono text-xs text-slate-400">developer_spec.py</span>
                </div>
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              </div>

              {/* Code Snippet */}
              <div className="font-mono text-xs space-y-2.5 leading-relaxed">
                <div>
                  <span className="text-blue-400">class</span>{' '}
                  <span className="text-white font-medium">ShreyaSonpavane</span>:
                </div>
                <div className="pl-4 space-y-1.5 text-slate-400">
                  <div>
                    <span className="text-slate-600"># Core Spec</span>
                  </div>
                  <div>
                    <span className="text-slate-300">education</span> ={' '}
                    <span className="text-cyan-300">"B.Tech Information Technology"</span>
                  </div>
                  <div>
                    <span className="text-slate-300">institution</span> ={' '}
                    <span className="text-cyan-300">"Meenakshi Sundararajan Eng. College"</span>
                  </div>
                  <div>
                    <span className="text-slate-300">internships</span> = [
                    <span className="text-blue-300">"Hexaware Technologies"</span>,{' '}
                    <span className="text-blue-300">"Intelizign"</span>]
                  </div>
                  <div>
                    <span className="text-slate-300">leadership</span> ={' '}
                    <span className="text-blue-300">"Secretary @ DevDynasty"</span>
                  </div>
                  <div>
                    <span className="text-slate-300">stack</span> = [
                    <span className="text-emerald-300">"Python"</span>,{' '}
                    <span className="text-emerald-300">"FastAPI"</span>,{' '}
                    <span className="text-emerald-300">"TensorFlow"</span>,{' '}
                    <span className="text-emerald-300">"Flower"</span>]
                  </div>
                  <div className="pt-2">
                    <span className="text-slate-300">focus</span> ={' '}
                    <span className="text-slate-200">
                      "Building privacy-first AI & resilient cloud microservices."
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Spec Footer */}
              <div className="mt-6 pt-5 border-t border-borderNavy grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-[11px] font-mono text-slate-500">
                    Primary Domain
                  </span>
                  <span className="font-medium text-xs text-cyan-400 font-mono mt-0.5 block">
                    AI/ML & Python Backend
                  </span>
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-slate-500">
                    LeetCode
                  </span>
                  <a
                    href={PROFILE.socials.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-slate-200 hover:text-cyan-300 transition-colors mt-0.5 block"
                  >
                    @shreya1831 ↗
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
