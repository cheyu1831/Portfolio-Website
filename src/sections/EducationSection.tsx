
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

const EDUCATION_ACCENTS = [
  {
    text: 'text-blue-300',
    border: 'border-blue-400/25',
    iconBg: 'bg-blue-400/10',
    glow: 'bg-blue-400/10',
    highlight: 'border-blue-400/15',
    icon: 'text-blue-300',
  },
  {
    text: 'text-violet-300',
    border: 'border-violet-300/20',
    iconBg: 'bg-violet-400/10',
    glow: 'bg-violet-400/10',
    highlight: 'border-violet-300/15',
    icon: 'text-violet-300',
  },
];

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="relative py-20 sm:py-28 bg-midnight border-t border-mutedNavy/40"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">

        <SectionHeading
          number="05"
          eyebrow="Academic Foundation"
          title="Education"
          subtitle="Academic journey building strong foundations in computer science, engineering, and intelligent technologies."
        />

        <div className="max-w-4xl mx-auto space-y-6">

          {EDUCATION.map((edu, idx) => {
            const accent = EDUCATION_ACCENTS[idx % EDUCATION_ACCENTS.length];

            return (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`rounded-2xl bg-gradient-to-r from-deepNavy via-deepNavy/90 to-midnight border ${accent.border} p-8 sm:p-10 shadow-card-subtle relative overflow-hidden`}
              >
                {/* Ambient Accent */}
                <div
                  className={`absolute -top-24 -right-20 w-72 h-72 ${accent.glow} rounded-full blur-3xl pointer-events-none`}
                />

                <div className="relative">

                  {/* Education Header */}
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-6 pb-6 border-b border-softBlush/10">

                    <div className="flex items-start gap-4">

                      <div
                        className={`p-3.5 rounded-2xl ${accent.iconBg} border ${accent.border}`}
                      >
                        <GraduationCap
                          className={`w-8 h-8 ${accent.icon}`}
                        />
                      </div>

                      <div>
                        <span className={`text-xs font-mono uppercase tracking-widest ${accent.text} font-semibold`}>
                          {edu.degree}
                        </span>

                        <h3 className="text-xl sm:text-2xl font-bold text-warmWhite font-sans mt-1">
                          {edu.department}
                        </h3>

                        <div className="text-base text-warmWhite/80 font-medium mt-1">
                          {edu.institution}
                        </div>
                      </div>

                    </div>

                    <div className="flex flex-col sm:items-end gap-1.5 text-xs font-mono text-warmWhite/60">

                      <div className="flex items-center gap-1.5">
                        <Calendar className={`w-3.5 h-3.5 ${accent.text}`} />
                        <span>{edu.year}</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <MapPin className={`w-3.5 h-3.5 ${accent.text}`} />
                        <span>{edu.location}</span>
                      </div>

                    </div>
                  </div>

                  {/* Academic Highlights */}
                  <div className="mt-6 space-y-3">

                    <h4 className={`text-xs font-mono uppercase tracking-wider ${accent.text} font-semibold flex items-center gap-2`}>
                      <BookOpen className="w-3.5 h-3.5" />
                      {idx === 0
                        ? 'Achievements & Focus Areas'
                        : 'Academic Highlights'}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">

                      {edu.highlights.map((highlight, i) => (
                        <div
                          key={i}
                          className={`p-3.5 rounded-xl bg-midnight/70 border ${accent.highlight} text-xs text-warmWhite/80 leading-relaxed transition-all duration-300 hover:bg-mutedNavy/60`}
                        >
                          {highlight}
                        </div>
                      ))}

                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};
