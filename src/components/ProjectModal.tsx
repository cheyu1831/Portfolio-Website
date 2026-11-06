import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Github,
  Cpu,
  CheckCircle2,
  Layers,
  AlertCircle,
  Play,
  Globe2,
} from 'lucide-react';
import { Project } from '../types/portfolio';

const DEFAULT_VIDEO_DEMO_URL = 'https://example.com/video-demo';
const DEFAULT_WEBSITE_URL = 'https://example.com/project-website';

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
          className="fixed inset-0 bg-midnight/90 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl bg-deepNavy border border-borderNavy p-6 sm:p-8 shadow-2xl z-10 text-slate-200 font-mono"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-5 right-5 p-2 rounded-md bg-midnight hover:bg-mutedNavy text-slate-400 hover:text-white border border-borderNavy transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="pr-10">
            <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider bg-midnight border border-blue-500/30 text-cyan-400 mb-2.5">
              {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-white">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm font-mono text-slate-400 mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Metrics Row */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-3 my-6 py-3.5 px-4 rounded-lg bg-midnight border border-borderNavy">
              {project.metrics.map((m, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-[10px] font-mono uppercase text-slate-500">
                    {m.label}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold font-mono text-cyan-300 mt-0.5">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Problem & Solution Breakdown */}
          <div className="space-y-4 my-6 text-xs sm:text-sm leading-relaxed text-slate-300">
            {project.problemStatement && (
              <div className="p-4 rounded-lg bg-midnight/70 border border-borderNavy">
                <h4 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-2">
                  <AlertCircle className="w-3.5 h-3.5" /> Problem Context
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-mono">
                  {project.problemStatement}
                </p>
              </div>
            )}

            {project.solutionOverview && (
              <div className="p-4 rounded-lg bg-midnight/70 border border-borderNavy">
                <h4 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-blue-400 font-semibold mb-2">
                  <Cpu className="w-3.5 h-3.5" /> Architectural Solution
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-mono">
                  {project.solutionOverview}
                </p>
              </div>
            )}

            {/* Key Features */}
            <div className="pt-2">
              <h4 className="font-mono text-xs uppercase tracking-wider text-slate-300 font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Key Implementation Details
              </h4>
              <ul className="space-y-2">
                {project.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture Highlights */}
            {project.architectureHighlights && project.architectureHighlights.length > 0 && (
              <div className="pt-2">
                <h4 className="font-mono text-xs uppercase tracking-wider text-slate-300 font-semibold mb-3 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-blue-400" /> System Architecture Spec
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.architectureHighlights.map((arch, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded bg-midnight border border-borderNavy text-xs font-mono text-slate-300"
                    >
                      {arch}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div className="pt-2">
              <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-midnight border border-borderNavy text-xs font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-5 border-t border-borderNavy flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-midnight hover:bg-mutedNavy border border-borderNavy text-xs font-mono text-slate-300 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-cyan-400" />
                  <span>GitHub Repository</span>
                </a>
              )}

              <a
                href={project.videoDemoUrl || DEFAULT_VIDEO_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-midnight hover:bg-mutedNavy border border-borderNavy text-xs font-mono text-slate-300 hover:text-white transition-colors"
              >
                <Play className="w-3.5 h-3.5 text-cyan-400" />
                <span>Video Demo</span>
              </a>

              <a
                href={project.websiteUrl || DEFAULT_WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-midnight hover:bg-mutedNavy border border-borderNavy text-xs font-mono text-slate-300 hover:text-white transition-colors"
              >
                <Globe2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Website</span>
              </a>

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-blue-600 text-white text-xs font-mono font-medium hover:bg-blue-500 transition-colors"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-md text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              [Close Esc]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
