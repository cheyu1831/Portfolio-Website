import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight, Terminal } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { EXPERIENCES } from '../data/experience';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-[#0B0B14] border-t border-mutedNavy/40">
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
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-softBlush/40 via-mutedNavy to-transparent -translate-x-1/2 hidden sm:block" />
          <div className="absolute left-4 top-4 bottom-4 w-px bg-softBlush/30 block sm:hidden" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Marker Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-deepNavy border-2 border-softBlush flex items-center justify-center shadow-glow-blush z-10">
                    <Briefcase className="w-3.5 h-3.5 text-softBlush" />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-10 sm:ml-0 sm:w-1/2 ${
                      isEven ? 'sm:pl-10' : 'sm:pr-10'
                    } w-full`}
                  >
                    <div className="rounded-2xl bg-gradient-to-b from-deepNavy to-midnight border border-softBlush/15 p-6 sm:p-7 hover:border-softBlush/35 transition-all duration-300 shadow-card-subtle hover:shadow-card-hover group">
                      {/* Company & Role Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-mono uppercase tracking-wider bg-mutedNavy text-softBlush border border-softBlush/20">
                          {exp.type}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-warmWhite/50">
                          <Calendar className="w-3.5 h-3.5 text-softBlush/70" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-warmWhite font-sans group-hover:text-softBlush transition-colors mt-2">
                        {exp.role}
                      </h3>

                      <div className="flex items-center gap-2 text-sm font-semibold text-softBlush/90 mb-4">
                        <span>{exp.company}</span>
                        <span>•</span>
                        <span className="text-xs font-normal text-warmWhite/50 flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {exp.location}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-warmWhite/80 leading-relaxed mb-5">
                        {exp.summary}
                      </p>

                      {/* Bullet points */}
                      <div className="space-y-2.5 mb-6">
                        {exp.achievements.map((item, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-warmWhite/75 leading-relaxed">
                            <ChevronRight className="w-3.5 h-3.5 text-softBlush mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="pt-4 border-t border-softBlush/10">
                        <div className="flex items-center gap-1.5 text-[11px] font-mono text-warmWhite/50 mb-2">
                          <Terminal className="w-3 h-3 text-softBlush/70" />
                          <span>Technologies Used:</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded bg-mutedNavy/60 text-[10px] sm:text-[11px] font-mono text-warmWhite border border-softBlush/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
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
