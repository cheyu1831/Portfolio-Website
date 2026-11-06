import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Cpu, CheckCircle2, Layers, AlertCircle } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-midnight/90 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-deepNavy border border-softBlush/20 p-6 sm:p-8 shadow-2xl z-10 text-warmWhite"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-lg bg-mutedNavy/60 hover:bg-mutedNavy text-warmWhite/70 hover:text-warmWhite border border-softBlush/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="pr-10">
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-mutedNavy border border-softBlush/20 text-softBlush mb-3">
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-sans tracking-tight text-warmWhite">
              {project.title}
            </h3>
            <p className="text-sm font-mono text-softBlush/80 mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Metrics Row */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-3 my-6 py-4 px-4 rounded-xl bg-midnight/60 border border-softBlush/10">
              {project.metrics.map((m, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-[10px] font-mono uppercase text-warmWhite/50">
                    {m.label}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold font-mono text-softBlush mt-0.5">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Problem & Solution Breakdown */}
          <div className="space-y-5 my-6 text-sm leading-relaxed text-warmWhite/85">
            {project.problemStatement && (
              <div className="p-4 rounded-xl bg-midnight/40 border border-red-500/10">
                <h4 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-rose-300 font-semibold mb-2">
                  <AlertCircle className="w-4 h-4" /> The Challenge / Problem Statement
                </h4>
                <p className="text-xs sm:text-sm text-warmWhite/80">
                  {project.problemStatement}
                </p>
              </div>
            )}

            {project.solutionOverview && (
              <div className="p-4 rounded-xl bg-midnight/40 border border-emerald-500/10">
                <h4 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold mb-2">
                  <Cpu className="w-4 h-4" /> Architectural Solution
                </h4>
                <p className="text-xs sm:text-sm text-warmWhite/80">
                  {project.solutionOverview}
                </p>
              </div>
            )}

            {/* Key Features */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-softBlush font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Key Capabilities & Implementation Details
              </h4>
              <ul className="space-y-2">
                {project.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-warmWhite/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-softBlush mt-1.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture Highlights */}
            {project.architectureHighlights && project.architectureHighlights.length > 0 && (
              <div className="pt-2">
                <h4 className="font-mono text-xs uppercase tracking-wider text-softBlush font-semibold mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4" /> System & Model Components
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.architectureHighlights.map((arch, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-lg bg-midnight/50 border border-softBlush/10 text-xs font-mono text-warmWhite/80"
                    >
                      {arch}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div className="pt-2">
              <h4 className="font-mono text-xs uppercase tracking-wider text-warmWhite/60 mb-2">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-mutedNavy/80 border border-softBlush/15 text-xs font-mono text-warmWhite"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-6 border-t border-softBlush/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-mutedNavy hover:bg-mutedNavy/80 border border-softBlush/20 text-xs font-mono text-warmWhite hover:text-softBlush transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              ) : (
                <span className="text-xs font-mono text-warmWhite/40 italic">
                  Repository access upon request
                </span>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-softBlush text-midnight text-xs font-semibold hover:bg-white transition-colors"
                >
                  <span>Live Deployment</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-mono text-warmWhite/60 hover:text-warmWhite"
            >
              Close Window [Esc]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
