import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, FileText, Rocket, Sparkles, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ACHIEVEMENTS } from '../data/achievements';

const ACHIEVEMENT_ICONS: Record<string, React.ReactNode> = {
  Leadership: <Users className="w-4 h-4 text-cyan-400" />,
  Hackathon: <Trophy className="w-4 h-4 text-blue-400" />,
  Research: <FileText className="w-4 h-4 text-cyan-400" />,
  Engineering: <Rocket className="w-4 h-4 text-blue-400" />,
};

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="relative py-32 sm:py-40 bg-midnight border-t border-borderNavy/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        <SectionHeading
          number="06"
          eyebrow="Leadership & Contributions"
          title="Achievements & Leadership"
          subtitle="Key technical leadership responsibilities, competitive hackathons, research presentations, and engineering deliveries."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {ACHIEVEMENTS.map((ach, idx) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -2 }}
              className="rounded-xl bg-deepNavy border border-borderNavy p-7 hover:border-blue-500/40 transition-colors duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-midnight border border-borderNavy">
                    {ACHIEVEMENT_ICONS[ach.type] || <Sparkles className="w-4 h-4 text-cyan-400" />}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-midnight text-cyan-300 border border-blue-500/25">
                    {ach.type}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white font-mono mb-1.5">
                  {ach.title}
                </h3>

                <p className="text-xs font-mono text-slate-400 mb-3.5">
                  {ach.roleOrContext}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed mb-5 font-mono">
                  {ach.description}
                </p>
              </div>

              <div className="pt-4 border-t border-borderNavy flex items-start gap-2 text-xs text-slate-400 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0 text-cyan-400" />
                <span className="text-[11px] leading-relaxed">{ach.impact}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
