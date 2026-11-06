import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Server, 
  BrainCircuit, 
  Binary, 
  Layout, 
  Database, 
  Wrench, 
  Sparkles,
  Layers
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { SKILL_CATEGORIES } from '../data/skills';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Programming Languages": <Code className="w-5 h-5 text-softBlush" />,
  "Backend Development": <Server className="w-5 h-5 text-softBlush" />,
  "AI & Machine Learning": <BrainCircuit className="w-5 h-5 text-softBlush" />,
  "Data Science & Libraries": <Binary className="w-5 h-5 text-softBlush" />,
  "Frontend Development": <Layout className="w-5 h-5 text-softBlush" />,
  "Databases": <Database className="w-5 h-5 text-softBlush" />,
  "Developer Tools": <Wrench className="w-5 h-5 text-softBlush" />,
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.title)];

  const displayedCategories =
    selectedCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-[#0B0B14] border-t border-mutedNavy/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        <SectionHeading
          number="02"
          eyebrow="Technical Repertoire"
          title="Skills & Technologies"
          subtitle="A comprehensive toolkit spanning distributed privacy-preserving ML algorithms, high-concurrency backends, and full-stack software development."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-2 overflow-x-auto no-scrollbar">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                  isSelected
                    ? 'bg-softBlush text-midnight border-softBlush font-bold shadow-glow-blush'
                    : 'bg-deepNavy/80 text-warmWhite/70 border-softBlush/10 hover:border-softBlush/30 hover:text-warmWhite'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedCategories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-2xl bg-gradient-to-b from-deepNavy to-midnight border border-softBlush/15 p-6 hover:border-softBlush/30 transition-all duration-300 shadow-card-subtle hover:shadow-card-hover flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-mutedNavy/60 border border-softBlush/10">
                      {CATEGORY_ICONS[cat.title] || <Layers className="w-5 h-5 text-softBlush" />}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-warmWhite font-sans">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-warmWhite/50 font-mono">
                        {cat.skills.length} core competencies
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-warmWhite/70 mb-5 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => {
                      const isHovered = hoveredSkill === skill.name;
                      return (
                        <div
                          key={skill.name}
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className={`relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-default border ${
                            skill.featured
                              ? 'bg-mutedNavy/70 text-warmWhite border-softBlush/30 shadow-sm'
                              : 'bg-deepNavy/80 text-warmWhite/70 border-softBlush/10 hover:border-softBlush/20'
                          } ${isHovered ? 'scale-105 border-softBlush text-softBlush bg-mutedNavy' : ''}`}
                        >
                          {skill.featured && (
                            <span className="w-1.5 h-1.5 rounded-full bg-softBlush" />
                          )}
                          <span>{skill.name}</span>
                          {skill.categoryTag && (
                            <span className="text-[10px] text-softBlush/50 font-mono ml-0.5">
                              • {skill.categoryTag}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer Note */}
                <div className="mt-6 pt-4 border-t border-softBlush/5 flex items-center justify-between text-[11px] font-mono text-warmWhite/40">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-softBlush/60" />
                    Verified in Project Implementations
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Engineering Highlights Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-6 rounded-2xl bg-deepNavy/40 border border-softBlush/10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-mutedNavy/80 border border-softBlush/20 flex items-center justify-center shrink-0">
              <BrainCircuit className="w-6 h-6 text-softBlush" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-warmWhite">
                Engineering Standard: No Arbitrary Proficiency Percentages
              </h4>
              <p className="text-xs text-warmWhite/60 mt-0.5">
                Competence is proven through tested code, functional architectures, and research prototypes rather than decorative progress bars.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="shrink-0 px-5 py-2.5 rounded-lg bg-deepNavy hover:bg-mutedNavy border border-softBlush/20 text-softBlush text-xs font-mono font-medium tracking-wide transition-all hover:border-softBlush/40"
          >
            Review Project Architectures →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

