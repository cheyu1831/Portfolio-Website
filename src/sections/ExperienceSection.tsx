import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight, Terminal } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { EXPERIENCES } from '../data/experience';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-32 sm:py-40 bg-midnight border-t border-borderNavy/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        <SectionHeading
          number="04"
          eyebrow="Industry Background"
          title="Professional Experience"
          subtitle="Real-world engineering internships contributing to enterprise LMS backends, asynchronous APIs, and software development workflows."
        />

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Central Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-px bg-borderNavy -translate-x-1/2 hidden sm:block" />
          <div className="absolute left-4 top-4 bottom-4 w-px bg-borderNavy block sm:hidden" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: idx * 0.12 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Marker Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-deepNavy border border-blue-500 flex items-center justify-center z-10">
                    <Briefcase className="w-3 h-3 text-cyan-400" />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-10 sm:ml-0 sm:w-1/2 ${
                      isEven ? 'sm:pl-10' : 'sm:pr-10'
                    } w-full`}
                  >
                    <motion.div
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                      className="rounded-xl bg-deepNavy border border-borderNavy p-7 hover:border-blue-500/40 transition-colors duration-200"
                    >
                      {/* Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider bg-midnight text-cyan-300 border border-blue-500/25">
                          {exp.type}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-blue-400" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-white font-mono mt-2">
                        {exp.role}
                      </h3>

                      <div className="flex items-center gap-2 text-xs font-mono text-slate-300 mb-4">
                        <span className="text-cyan-400 font-medium">{exp.company}</span>
                        <span>•</span>
                        <span className="text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {exp.location}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 font-mono">
                        {exp.summary}
                      </p>

                      {/* Bullet points */}
                      <div className="space-y-2 mb-6">
                        {exp.achievements.map((item, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed font-mono">
                            <ChevronRight className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="pt-4 border-t border-borderNavy">
                        <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 mb-2">
                          <Terminal className="w-3 h-3 text-blue-400" />
                          <span>Technologies:</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded bg-midnight text-[11px] font-mono text-slate-300 border border-borderNavy"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
