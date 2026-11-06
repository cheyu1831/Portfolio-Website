import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, FileText, Rocket, Sparkles, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ACHIEVEMENTS } from '../data/achievements';

const ACHIEVEMENT_ICONS: Record<string, React.ReactNode> = {
  Leadership: <Users className="w-5 h-5 text-softBlush" />,
  Hackathon: <Trophy className="w-5 h-5 text-softBlush" />,
  Research: <FileText className="w-5 h-5 text-softBlush" />,
  Engineering: <Rocket className="w-5 h-5 text-softBlush" />,
};

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="relative py-20 sm:py-28 bg-[#0B0B14] border-t border-mutedNavy/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        <SectionHeading
          number="06"
          eyebrow="Leadership & Contributions"
          title="Achievements & Activities"
          subtitle="Key technical leadership responsibilities, competitive prototyping, research contributions, and project deliveries."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((ach, idx) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-2xl bg-gradient-to-b from-deepNavy to-midnight border border-softBlush/15 p-6 hover:border-softBlush/30 transition-all duration-300 shadow-card-subtle hover:shadow-card-hover flex flex-col justify-between ${
                ach.type === 'Leadership' ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-mutedNavy/70 border border-softBlush/15">
                    {ACHIEVEMENT_ICONS[ach.type] || <Sparkles className="w-5 h-5 text-softBlush" />}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-mutedNavy/40 text-softBlush border border-softBlush/15">
                    {ach.type}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-warmWhite font-sans mb-1">
                  {ach.title}
                </h3>

                <p className="text-xs font-mono text-softBlush/80 mb-3">
                  {ach.roleOrContext}
                </p>

                <p className="text-xs sm:text-sm text-warmWhite/75 leading-relaxed mb-4">
                  {ach.description}
                </p>
              </div>

              <div className="pt-4 border-t border-softBlush/10 flex items-start gap-2 text-xs text-softBlush/90">
                <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0 text-softBlush" />
                <span className="text-[11px] font-mono leading-tight">{ach.impact}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
