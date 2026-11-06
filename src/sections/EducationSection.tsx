import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  BookOpen,
  MapPin,
  Calendar,
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { EDUCATION } from '../data/education';

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="relative py-32 sm:py-40 bg-midnight border-t border-borderNavy/60"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        <SectionHeading
          number="05"
          eyebrow="Academic Foundation"
          title="Education"
          subtitle="Academic journey building strong foundations in computer science, software engineering, and intelligent systems."
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -2 }}
              className="rounded-xl bg-deepNavy border border-borderNavy p-8 sm:p-10 hover:border-blue-500/40 transition-colors duration-200"
            >
              <div>
                {/* Education Header */}
                <div className="flex flex-col sm:flex-row items-start justify-between gap-6 pb-6 border-b border-borderNavy">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-midnight border border-borderNavy shrink-0">
                      <GraduationCap className="w-5 h-5 text-cyan-400" />
                    </div>

                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-medium">
                        {edu.degree}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white font-mono mt-1">
                        {edu.department}
                      </h3>
                      <div className="text-sm text-slate-300 font-mono mt-1">
                        {edu.institution}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1.5 text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      <span>{edu.year}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-blue-400" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                {/* Academic Highlights */}
                <div className="mt-6 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                    Key Details & Coursework
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    {edu.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-md bg-midnight/80 border border-borderNavy text-xs text-slate-300 leading-relaxed font-mono"
                      >
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
