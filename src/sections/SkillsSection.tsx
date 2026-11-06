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
  Layers
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { SKILL_CATEGORIES } from '../data/skills';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Programming Languages": <Code className="w-4 h-4 text-cyan-400" />,
  "Backend Development": <Server className="w-4 h-4 text-blue-400" />,
  "AI & Machine Learning": <BrainCircuit className="w-4 h-4 text-cyan-400" />,
  "Data Science & Libraries": <Binary className="w-4 h-4 text-blue-400" />,
  "Frontend Development": <Layout className="w-4 h-4 text-cyan-400" />,
  "Databases": <Database className="w-4 h-4 text-blue-400" />,
  "Developer Tools": <Wrench className="w-4 h-4 text-cyan-400" />,
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
    <section id="skills" className="relative py-32 sm:py-40 bg-midnight border-t border-borderNavy/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        <SectionHeading
          number="02"
          eyebrow="Technical Repertoire"
          title="Skills & Technologies"
          subtitle="Core stack spanning distributed machine learning, asynchronous backend microservices, and modern web applications."
        />

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-all duration-200 border ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-500 font-medium shadow-sm'
                    : 'bg-deepNavy text-slate-300 border-borderNavy hover:border-slate-600 hover:text-white'
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
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="rounded-xl bg-deepNavy border border-borderNavy p-7 hover:border-blue-500/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-midnight border border-borderNavy">
                      {CATEGORY_ICONS[cat.title] || <Layers className="w-4 h-4 text-cyan-400" />}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white font-mono">
                        {cat.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 font-mono">
                        {cat.skills.length} technologies
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-6 leading-relaxed font-mono">
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
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-mono transition-all duration-150 cursor-default border ${
                            skill.featured
                              ? 'bg-midnight text-slate-200 border-blue-500/30'
                              : 'bg-midnight/70 text-slate-300 border-borderNavy'
                          } ${isHovered ? 'border-cyan-400 text-cyan-300' : ''}`}
                        >
                          {skill.featured && (
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          )}
                          <span>{skill.name}</span>
                          {skill.categoryTag && (
                            <span className="text-[10px] text-slate-500 ml-0.5">
                              • {skill.categoryTag}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Minimal Engineering Note Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-6 rounded-xl bg-deepNavy/60 border border-borderNavy flex flex-col sm:flex-row items-center justify-between gap-5 font-mono"
        >
          <div className="flex items-center gap-3.5">
            <span className="text-cyan-400 text-lg">✦</span>
            <div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                Engineering Standard
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Technical competency proven through functional architectures, tested code, and working research prototypes.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="shrink-0 px-4 py-2 rounded-md bg-midnight hover:bg-mutedNavy border border-borderNavy hover:border-cyan-500/40 text-cyan-300 text-xs font-mono transition-colors"
          >
            Review Projects →
          </a>
        </motion.div>
      </div>
    </section>
  );
};
