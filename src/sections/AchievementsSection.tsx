import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, CalendarDays, ExternalLink, MessageSquare, Trophy } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ACHIEVEMENTS } from '../data/achievements';
import { AchievementCategory } from '../types/portfolio';

const CATEGORY_ICONS: Record<AchievementCategory['id'], React.ReactNode> = {
  coding: <Trophy className="w-4 h-4 text-cyan-400" />,
  hackathons: <BrainCircuit className="w-4 h-4 text-blue-400" />,
  papers: <MessageSquare className="w-4 h-4 text-cyan-400" />,
};

export const AchievementsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<AchievementCategory['id']>('coding');
  const selectedCategory = ACHIEVEMENTS.find(({ id }) => id === activeCategory) ?? ACHIEVEMENTS[0];

  return (
    <section id="achievements" className="relative py-32 sm:py-40 bg-midnight border-t border-borderNavy/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        <SectionHeading
          number="06"
          eyebrow="Recognition & Contributions"
          title="Achievements"
          subtitle="Coding competitions, technical events, and research presentations."
        />

        <div
          role="tablist"
          aria-label="Achievement categories"
          className="flex flex-wrap gap-2 mb-8"
        >
          {ACHIEVEMENTS.map((category) => {
            const isActive = category.id === activeCategory;
            return (
              <button
                key={category.id}
                id={`achievement-tab-${category.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`achievement-panel-${category.id}`}
                onClick={() => setActiveCategory(category.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-md text-xs sm:text-sm font-mono border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                    : 'bg-deepNavy text-slate-300 border-borderNavy hover:border-cyan-500/40 hover:text-white'
                }`}
              >
                {CATEGORY_ICONS[category.id]}
                {category.label}
              </button>
            );
          })}
        </div>

        <div
          id={`achievement-panel-${selectedCategory.id}`}
          role="tabpanel"
          aria-labelledby={`achievement-tab-${selectedCategory.id}`}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
        >
          {selectedCategory.entries.map((achievement, index) => {
            const issuerOrVenue =
              achievement.category === 'coding'
                ? achievement.issuer
                : achievement.category === 'papers'
                  ? achievement.venue
                  : null;

            return (
              <motion.article
                key={achievement.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -3 }}
                className="h-full rounded-xl bg-deepNavy border border-borderNavy p-6 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-950/20 transition-[border-color,box-shadow] duration-200 flex flex-col"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-midnight border border-borderNavy">
                    {CATEGORY_ICONS[achievement.category]}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-400 shrink-0">
                    <CalendarDays className="w-3.5 h-3.5 text-cyan-400" />
                    {achievement.date}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white font-mono leading-relaxed">
                  {achievement.title}
                </h3>
                {issuerOrVenue && (
                  <p className="text-xs font-mono text-cyan-300 mt-2 mb-4 leading-relaxed">
                    {issuerOrVenue}
                  </p>
                )}
                {achievement.category === 'hackathons' && (
                  <span className="self-start mb-4 px-2 py-1 rounded bg-midnight border border-blue-500/25 text-[11px] uppercase tracking-wide text-blue-300 font-mono">
                    {achievement.position}
                  </span>
                )}
                <p className="text-xs text-slate-300 leading-relaxed font-mono flex-1">
                  {achievement.description}
                </p>

                <div className="pt-4 mt-5 border-t border-borderNavy">
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-300 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-sm"
                  >
                    View Details
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
