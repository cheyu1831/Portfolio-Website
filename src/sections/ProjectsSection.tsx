
import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  fedshield: <ShieldCheck className="w-7 h-7 text-rose-300" />,
  leafy: <Leaf className="w-7 h-7 text-emerald-300" />,
  'smart-learning': <BrainCircuit className="w-7 h-7 text-sky-300" />,
  queryshield: <Database className="w-7 h-7 text-violet-300" />,
  'mil-evid': <Layers className="w-7 h-7 text-teal-300" />,
};

const PROJECT_ACCENTS: Record<
  string,
  {
    text: string;
    border: string;
    glow: string;
    iconBg: string;
    badge: string;
  }
> = {
  fedshield: {
    text: 'text-rose-300',
    border: 'border-rose-400/25',
    glow: 'bg-rose-400/10',
    iconBg: 'bg-rose-400/10',
    badge: 'bg-rose-400/10 text-rose-300 border-rose-400/25',
  },

  leafy: {
    text: 'text-emerald-300',
    border: 'border-emerald-400/25',
    glow: 'bg-emerald-400/10',
    iconBg: 'bg-emerald-400/10',
    badge: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/25',
  },

  'smart-learning': {
    text: 'text-sky-300',
    border: 'border-sky-400/25',
    glow: 'bg-sky-400/10',
    iconBg: 'bg-sky-400/10',
    badge: 'bg-sky-400/10 text-sky-300 border-sky-400/25',
  },

  'mil-evid': {
    text: 'text-teal-300',
    border: 'border-teal-400/25',
    glow: 'bg-teal-400/10',
    iconBg: 'bg-teal-400/10',
    badge: 'bg-teal-400/10 text-teal-300 border-teal-400/25',
  },

  queryshield: {
    text: 'text-violet-300',
    border: 'border-violet-400/25',
    glow: 'bg-violet-400/10',
    iconBg: 'bg-violet-400/10',
    badge: 'bg-violet-400/10 text-violet-300 border-violet-400/25',
  },
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
      className="relative py-24 sm:py-32 bg-midnight border-t border-mutedNavy/40"
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
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                activeFilter === filter
                  ? 'bg-softBlush text-midnight border-softBlush font-bold shadow-glow-blush'
                  : 'bg-deepNavy text-warmWhite/70 border-softBlush/10 hover:border-softBlush/30 hover:text-warmWhite'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* All Five Projects — Consistent Showcase */}
        <div className="space-y-8">
          {filteredProjects.map((project, idx) => {
            const accent =
              PROJECT_ACCENTS[project.id] ?? PROJECT_ACCENTS.fedshield;

            const projectNumber = PROJECTS.findIndex(
              (item) => item.id === project.id
            ) + 1;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className={`rounded-3xl bg-gradient-to-br from-deepNavy via-deepNavy/90 to-midnight border ${accent.border} overflow-hidden shadow-2xl relative`}
              >
                {/* Ambient Background Accent */}
                <div
                  className={`absolute top-0 right-0 w-96 h-96 ${accent.glow} rounded-full blur-3xl pointer-events-none`}
                />

                <div className="relative p-7 sm:p-9 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left: Project Information */}
                    <div className="lg:col-span-7 space-y-5">

                      {/* Category */}
                      <div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider border ${accent.badge}`}
                        >
                          {project.category}
                        </span>
                      </div>

                      {/* Project Title */}
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-3 rounded-2xl ${accent.iconBg} border ${accent.border}`}
                        >
                          {PROJECT_ICONS[project.id] || (
                            <Layers className="w-8 h-8 text-softBlush" />
                          )}
                        </div>

                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-warmWhite font-sans">
                            {project.title}
                          </h3>

                          <p
                            className={`text-xs sm:text-sm font-mono ${accent.text}`}
                          >
                            {project.tagline}
                          </p>
                        </div>
                      </div>

                      {/* Project Description */}
                      <p className="text-sm sm:text-base text-warmWhite/80 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="pt-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-warmWhite/50 block mb-2">
                          Technologies Used
                        </span>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 6).map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md bg-mutedNavy/70 text-xs font-mono text-warmWhite border border-softBlush/15"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="pt-3 flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => setModalProject(project)}
                          className="px-5 py-2.5 rounded-lg bg-softBlush text-midnight text-xs font-semibold tracking-wide hover:bg-white transition-all shadow-glow-blush flex items-center gap-2"
                        >
                          <span>View Project Details</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>

                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2.5 rounded-lg bg-midnight/80 hover:bg-mutedNavy text-warmWhite text-xs font-mono border border-softBlush/20 flex items-center gap-2 transition-colors"
                          >
                            <Github className="w-4 h-4 text-softBlush" />
                            <span>GitHub</span>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right: Project Highlights */}
                    <div className="lg:col-span-5">
                      <div
                        className={`rounded-2xl bg-midnight/90 border ${accent.border} p-5 shadow-inner`}
                      >

                        <div className="flex items-center justify-between pb-3 border-b border-softBlush/10 mb-4">
                          <span
                            className={`font-mono text-xs uppercase tracking-wider ${accent.text} font-semibold flex items-center gap-1.5`}
                          >
                            <Layers className="w-3.5 h-3.5" />
                            Project Highlights
                          </span>

                          <span className="text-[10px] font-mono text-warmWhite/40">
                            {String(projectNumber).padStart(2, '0')} / 05
                          </span>
                        </div>

                        <div className="space-y-3">
                          {project.keyFeatures.slice(0, 3).map((feature, i) => (
                            <div
                              key={i}
                              className="p-3 rounded-lg bg-deepNavy/80 border border-softBlush/15 flex items-start gap-3"
                            >
                              <span
                                className={`text-xs font-mono ${accent.text} pt-0.5`}
                              >
                                {String(i + 1).padStart(2, '0')}
                              </span>

                              <p className="text-xs sm:text-sm text-warmWhite/80 leading-relaxed">
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
