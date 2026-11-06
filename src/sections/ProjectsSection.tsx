import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Leaf,
  BrainCircuit,
  Database,
  ArrowUpRight,
  Github,
  Layers,
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectModal } from '../components/ProjectModal';
import { PROJECTS } from '../data/projects';
import { Project } from '../types/portfolio';

const PROJECT_ICONS: Record<string, React.ReactNode> = {
  fedshield: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
  leafy: <Leaf className="w-5 h-5 text-blue-400" />,
  'smart-learning': <BrainCircuit className="w-5 h-5 text-cyan-400" />,
  queryshield: <Database className="w-5 h-5 text-blue-400" />,
  'mil-evid': <Layers className="w-5 h-5 text-cyan-400" />,
};

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const filters = [
    'All',
    'AI & Privacy',
    'AI & Web',
    'Systems & ML',
  ];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'AI & Privacy') {
      return proj.category === 'AI/ML & Privacy';
    }
    if (activeFilter === 'AI & Web') {
      return proj.category === 'AI & Web';
    }
    if (activeFilter === 'Systems & ML') {
      return proj.category === 'Systems & ML';
    }
    return true;
  });

  return (
    <section
      id="projects"
      className="relative py-32 sm:py-40 bg-midnight border-t border-borderNavy/60"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        <SectionHeading
          number="03"
          eyebrow="Engineering Portfolio"
          title="Featured Projects"
          subtitle="Production-grade AI systems, privacy-preserving architectures, and intelligent software applications."
        />

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-all duration-200 border ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white border-blue-500 font-medium shadow-sm'
                  : 'bg-deepNavy text-slate-300 border-borderNavy hover:border-slate-600 hover:text-white'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Animated Project Cards Grid */}
        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const projectNumber = PROJECTS.findIndex(
                (item) => item.id === project.id
              ) + 1;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  whileHover={{ y: -2 }}
                  className="rounded-xl bg-deepNavy border border-borderNavy hover:border-blue-500/40 overflow-hidden transition-colors duration-200"
                >
                  <div className="p-7 sm:p-9 lg:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                      {/* Left: Project Information */}
                      <div className="lg:col-span-7 space-y-5">
                        {/* Category & Status */}
                        <div className="flex items-center gap-3">
                          <span className="px-2.5 py-1 rounded-md text-xs font-mono uppercase tracking-wider bg-midnight text-cyan-300 border border-blue-500/30 font-medium">
                            {project.category}
                          </span>
                          <span className="text-[11px] font-mono text-slate-500">
                            PROJ_{String(projectNumber).padStart(2, '0')}
                          </span>
                        </div>

                        {/* Project Title & Tagline */}
                        <div className="flex items-start gap-3.5">
                          <div className="p-2.5 rounded-lg bg-midnight border border-borderNavy shrink-0 mt-0.5">
                            {PROJECT_ICONS[project.id] || (
                              <Layers className="w-5 h-5 text-cyan-400" />
                            )}
                          </div>

                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white font-mono">
                              {project.title}
                            </h3>
                            <p className="text-xs sm:text-sm font-mono text-slate-400 mt-1">
                              {project.tagline}
                            </p>
                          </div>
                        </div>

                        {/* Project Description */}
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="pt-2">
                          <span className="text-xs font-mono text-slate-500 block mb-2">
                            Core Stack:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 6).map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 rounded bg-midnight text-xs font-mono text-slate-300 border border-borderNavy"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="pt-3 flex flex-wrap items-center gap-3">
                          <motion.button
                            whileTap={{ scale: 0.96 }}
                            onClick={() => setModalProject(project)}
                            className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-medium tracking-wide transition-colors flex items-center gap-2 shadow-sm"
                          >
                            <span>System Architecture</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </motion.button>

                          {project.repoUrl && (
                            <motion.a
                              whileTap={{ scale: 0.96 }}
                              href={project.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3.5 py-2 rounded-md bg-midnight hover:bg-mutedNavy text-slate-300 hover:text-white text-xs font-mono border border-borderNavy hover:border-slate-600 flex items-center gap-2 transition-colors"
                            >
                              <Github className="w-3.5 h-3.5 text-cyan-400" />
                              <span>GitHub</span>
                            </motion.a>
                          )}
                        </div>
                      </div>

                      {/* Right: Key Highlights */}
                      <div className="lg:col-span-5">
                        <div className="rounded-lg bg-midnight/80 border border-borderNavy p-5">
                          <div className="flex items-center justify-between pb-3 border-b border-borderNavy mb-4">
                            <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-medium flex items-center gap-1.5">
                              <Layers className="w-3.5 h-3.5" />
                              Key Capabilities
                            </span>
                            <span className="text-[11px] font-mono text-slate-500">
                              Spec Overview
                            </span>
                          </div>

                          <div className="space-y-3">
                            {project.keyFeatures.slice(0, 3).map((feature, i) => (
                              <div
                                key={i}
                                className="p-3 rounded-md bg-deepNavy/60 border border-borderNavy/80 flex items-start gap-3"
                              >
                                <span className="text-xs font-mono text-cyan-400 pt-0.5 shrink-0 font-medium">
                                  0{i + 1}
                                </span>
                                <p className="text-xs text-slate-300 leading-relaxed font-mono">
                                  {feature}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </section>
  );
};
