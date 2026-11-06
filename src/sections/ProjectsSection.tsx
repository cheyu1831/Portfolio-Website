import React, { useRef, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Globe2,
  Github,
  Play,
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectModal } from '../components/ProjectModal';
import { PROJECTS } from '../data/projects';
import { Project } from '../types/portfolio';

const PROJECT_ORDER = ['leafy', 'smart-learning', 'queryshield', 'fedshield', 'mil-evid'];
const FILTERS = ['All', 'AI & Privacy', 'AI & Web', 'Systems & ML'];
const DEFAULT_VIDEO_DEMO_URL = 'https://example.com/video-demo';
const DEFAULT_WEBSITE_URL = 'https://example.com/project-website';
const GALLERY_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const PROJECT_VISUAL_LABELS: Record<string, string> = {
  leafy: 'Illustrative botanical computer vision and plant health analysis',
  'smart-learning': 'Illustrative assistive learning and education technology',
  queryshield: 'Illustrative natural language SQL and database architecture',
  fedshield: 'Illustrative federated learning and distributed fraud detection',
  'mil-evid': 'Illustrative evidence-grounded geospatial intelligence analysis',
};
const PROJECT_IMAGES: Record<string, string> = {
  leafy: "/images/leafy.png",
  "smart-learning": "/images/smart-learning.jpeg",
  queryshield: "/images/queryshield.jpeg",
  fedshield: "/images/fedshield.png",
  "mil-evid": "/images/mil-evid.png",
};

// const ProjectIllustration: React.FC<{ project: Project }> = ({ project }) => (
//   <svg
//     viewBox="0 0 480 190"
//     role="img"
//     aria-label={PROJECT_VISUAL_LABELS[project.id]}
//     className="block w-full h-full rounded-xl border border-borderNavy/80 bg-midnight"
//     preserveAspectRatio="xMidYMid slice"
//   >
//     <defs>
//       <linearGradient id={`visual-gradient-${project.id}`} x1="0" y1="0" x2="1" y2="1">
//         <stop offset="0%" stopColor="#0E1626" />
//         <stop offset="100%" stopColor="#102C4A" />
//       </linearGradient>
//       <pattern id={`visual-grid-${project.id}`} width="24" height="24" patternUnits="userSpaceOnUse">
//         <path d="M24 0H0V24" fill="none" stroke="#1E2D4A" strokeWidth="0.7" />
//       </pattern>
//     </defs>
//     <rect width="480" height="190" rx="14" fill={`url(#visual-gradient-${project.id})`} />
//     <rect width="480" height="190" rx="14" fill={`url(#visual-grid-${project.id})`} opacity="0.65" />
//     <text x="20" y="25" fill="#67E8F9" fontSize="9" fontFamily="monospace" letterSpacing="1.5">
//       {project.id.toUpperCase()} / CONCEPT VISUAL
//     </text>

//     {project.id === 'leafy' && (
//       <g fill="none" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M240 160V74M240 116c-35-9-56-29-58-55 28 1 50 18 58 55ZM241 139c34-7 54-25 58-49-25 0-48 15-58 49Z" stroke="#34D399" strokeWidth="4" />
//         <path d="M182 61c16 5 35 23 48 48M299 90c-17 5-38 20-52 40" stroke="#A7F3D0" strokeWidth="2" />
//         <circle cx="240" cy="68" r="44" stroke="#22D3EE" strokeOpacity="0.45" strokeDasharray="4 6" />
//         <path d="M95 146h40M345 146h40M115 135l10 11-10 11M365 135l-10 11 10 11" stroke="#38BDF8" strokeWidth="2" />
//       </g>
//     )}

//     {project.id === 'smart-learning' && (
//       <g fill="none" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M240 145c-27-18-53-20-81-11V57c29-9 54-7 81 11 27-18 52-20 81-11v77c-28-9-54-7-81 11Z" fill="#0B1930" stroke="#38BDF8" strokeWidth="3" />
//         <path d="M240 68v75M177 77c18-4 34 0 48 9M177 96c18-4 34 0 48 9M255 86c15-9 30-13 48-9M255 105c15-9 30-13 48-9" stroke="#67E8F9" strokeWidth="2" />
//         <circle cx="112" cy="88" r="16" stroke="#A78BFA" strokeWidth="3" />
//         <path d="M112 80v16M104 88h16M368 78h34M368 94h25M368 110h31" stroke="#A78BFA" strokeWidth="2" />
//       </g>
//     )}

//     {project.id === 'queryshield' && (
//       <g fill="none" strokeLinecap="round" strokeLinejoin="round">
//         <ellipse cx="145" cy="65" rx="48" ry="17" fill="#10243D" stroke="#38BDF8" strokeWidth="3" />
//         <path d="M97 65v62c0 10 21 18 48 18s48-8 48-18V65M97 95c0 10 21 18 48 18s48-8 48-18" stroke="#38BDF8" strokeWidth="3" />
//         <path d="M240 62h152v87H240z" fill="#0B1930" stroke="#1E4065" strokeWidth="2" />
//         <text x="257" y="87" fill="#67E8F9" fontSize="12" fontFamily="monospace">SELECT</text>
//         <text x="257" y="108" fill="#A5B4FC" fontSize="12" fontFamily="monospace">name, count(*)</text>
//         <text x="257" y="129" fill="#67E8F9" fontSize="12" fontFamily="monospace">FROM records;</text>
//         <path d="M196 105h31M215 96l12 9-12 9" stroke="#22D3EE" strokeWidth="2.5" />
//       </g>
//     )}

//     {project.id === 'fedshield' && (
//       <g fill="none" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M240 93 146 55M240 93l94-38M240 93l-94 57M240 93l94 57" stroke="#38BDF8" strokeWidth="2" strokeDasharray="5 5" />
//         <rect x="202" y="58" width="76" height="70" rx="14" fill="#0B1930" stroke="#22D3EE" strokeWidth="3" />
//         <path d="M216 79h48M216 91h48M216 103h34" stroke="#67E8F9" strokeWidth="2" />
//         {[['146', '55'], ['334', '55'], ['146', '150'], ['334', '150']].map(([cx, cy]) => (
//           <g key={`${cx}-${cy}`}>
//             <circle cx={cx} cy={cy} r="23" fill="#0E2038" stroke="#60A5FA" strokeWidth="2.5" />
//             <path d={`M${Number(cx) - 8} ${cy}h16M${cx} ${Number(cy) - 8}v16`} stroke="#A5F3FC" strokeWidth="2" />
//           </g>
//         ))}
//       </g>
//     )}

//     {project.id === 'mil-evid' && (
//       <g fill="none" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M108 52h264v100H108z" fill="#0B1930" stroke="#1E4065" strokeWidth="2" />
//         <path d="M108 86h264M196 52v100M284 52v100" stroke="#1E4065" strokeWidth="1.5" />
//         <path d="M144 116c18-27 28 10 47-8s27 12 43-6 28 9 44-7 29 10 50-8" stroke="#22D3EE" strokeWidth="3" />
//         <circle cx="236" cy="102" r="26" stroke="#60A5FA" strokeDasharray="4 5" />
//         <path d="M236 78c-11 0-19 8-19 18 0 14 19 34 19 34s19-20 19-34c0-10-8-18-19-18Z" fill="#172D4B" stroke="#67E8F9" strokeWidth="2" />
//         <circle cx="236" cy="96" r="5" fill="#67E8F9" />
//       </g>
//     )}

//     <text x="20" y="174" fill="#94A3B8" fontSize="9" fontFamily="monospace">
//       Illustrative visualization — not an application screenshot
//     </text>
//   </svg>
// );

const ProjectIllustration: React.FC<{ project: Project }> = ({ project }) => (
  <img
    src={PROJECT_IMAGES[project.id]}
    alt={PROJECT_VISUAL_LABELS[project.id]}
    className="block w-full h-full rounded-xl border border-borderNavy/80 object-cover"
    loading="lazy"
  />
);

const getFilteredProjects = (filter: string): Project[] =>
  [...PROJECTS]
    .sort((a, b) => PROJECT_ORDER.indexOf(a.id) - PROJECT_ORDER.indexOf(b.id))
    .filter((project) => {
      if (filter === 'All') return true;
      if (filter === 'AI & Privacy') return project.category === 'AI/ML & Privacy';
      return project.category === filter;
    });

interface GalleryCard {
  project: Project;
  isSelected: boolean;
  position: number;
  width: number;
  zIndex: number;
  labelAlignment: 'left' | 'right';
}

const getGalleryCards = (projects: Project[], selectedIndex: number): GalleryCard[] => {
  if (selectedIndex < 0) return [];
  const selectedProject = projects[selectedIndex];
  const lastIndex = projects.length - 1;
  const cards: GalleryCard[] = [
    {
      project: selectedProject,
      isSelected: true,
      position: selectedIndex === 0 ? 0 : selectedIndex === lastIndex ? 20 : 10,
      width: 80,
      zIndex: 30,
      labelAlignment: 'left',
    },
  ];

  if (selectedIndex === 0) {
    projects.slice(1, 3).forEach((project, index) => {
      cards.push({
        project,
        isSelected: false,
        position: index === 0 ? 76 : 88,
        width: 16,
        zIndex: index === 0 ? 20 : 10,
        labelAlignment: 'right',
      });
    });
  } else if (selectedIndex === lastIndex) {
    const precedingProjects = projects.slice(Math.max(0, selectedIndex - 2), selectedIndex);
    precedingProjects.forEach((project, index) => {
      const isNearest = index === precedingProjects.length - 1;
      cards.push({
        project,
        isSelected: false,
        position: isNearest ? 14 : 4,
        width: 16,
        zIndex: isNearest ? 20 : 10,
        labelAlignment: 'left',
      });
    });
  } else {
    cards.push(
      {
        project: projects[selectedIndex - 1],
        isSelected: false,
        position: 4,
        width: 16,
        zIndex: 10,
        labelAlignment: 'right',
      },
      {
        project: projects[selectedIndex + 1],
        isSelected: false,
        position: 86,
        width: 16,
        zIndex: 10,
        labelAlignment: 'left',
      }
    );
  }

  return cards;
};

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeProjectId, setActiveProjectId] = useState('leafy');
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [navigationDirection, setNavigationDirection] = useState<-1 | 1>(1);
  const touchStartX = useRef<number | null>(null);
  const wheelDistance = useRef(0);
  const filteredProjects = getFilteredProjects(activeFilter);
  const activeProjectIndex = filteredProjects.findIndex(({ id }) => id === activeProjectId);
  const galleryCards = getGalleryCards(filteredProjects, activeProjectIndex);

  const selectFilter = (filter: string) => {
    const nextProjects = getFilteredProjects(filter);
    setActiveFilter(filter);
    setNavigationDirection(1);
    setActiveProjectId((currentId) =>
      nextProjects.some(({ id }) => id === currentId) ? currentId : nextProjects[0]?.id ?? ''
    );
  };

  const navigateProjects = (direction: -1 | 1) => {
    const nextIndex = activeProjectIndex + direction;
    if (nextIndex < 0 || nextIndex >= filteredProjects.length) return;
    setNavigationDirection(direction);
    setActiveProjectId(filteredProjects[nextIndex].id);
  };

  const handleHorizontalGesture = (direction: -1 | 1) => {
    navigateProjects(direction);
    wheelDistance.current = 0;
  };

  return (
    <section
      id="projects"
      className="relative py-32 sm:py-40 bg-midnight border-t border-borderNavy/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        <SectionHeading
          number="03"
          eyebrow="Engineering Portfolio"
          title="Featured Projects"
          subtitle="Production-grade AI systems, federated architectures, and intelligent software applications."
        />

        <div className="flex flex-wrap items-center justify-between gap-5 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            {FILTERS.map((filter) => (
              <motion.button
                key={filter}
                type="button"
                whileTap={{ scale: 0.96 }}
                onClick={() => selectFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={`px-3.5 py-1.5 rounded-md text-xs font-mono transition-all duration-200 border focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white border-blue-500 font-medium shadow-sm'
                    : 'bg-deepNavy text-slate-300 border-borderNavy hover:border-slate-600 hover:text-white'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-slate-500 min-w-12 text-center">
              {activeProjectIndex < 0
                ? `-- / ${String(filteredProjects.length).padStart(2, '0')}`
                : `${String(activeProjectIndex + 1).padStart(2, '0')} / ${String(filteredProjects.length).padStart(2, '0')}`}
            </span>
            <button
              type="button"
              onClick={() => navigateProjects(-1)}
              disabled={activeProjectIndex <= 0}
              aria-label="Show previous project"
              className="w-11 h-11 inline-flex items-center justify-center rounded-md text-slate-200 bg-deepNavy border border-blue-500/50 hover:border-cyan-400 hover:text-cyan-300 hover:bg-mutedNavy active:scale-95 disabled:opacity-45 disabled:cursor-not-allowed transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => navigateProjects(1)}
              disabled={
                activeProjectIndex < 0 || activeProjectIndex >= filteredProjects.length - 1
              }
              aria-label="Show next project"
              className="w-11 h-11 inline-flex items-center justify-center rounded-md text-slate-200 bg-deepNavy border border-blue-500/50 hover:border-cyan-400 hover:text-cyan-300 hover:bg-mutedNavy active:scale-95 disabled:opacity-45 disabled:cursor-not-allowed transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <p className="mb-2 text-[11px] font-mono text-slate-500">
          Use the arrows, keyboard, or horizontal gestures to browse projects.
        </p>
        <div
          role="region"
          aria-label="Expandable horizontal project gallery"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
              event.preventDefault();
              navigateProjects(event.key === 'ArrowRight' ? 1 : -1);
            }
          }}
          onWheel={(event) => {
            const horizontalDelta =
              Math.abs(event.deltaX) > Math.abs(event.deltaY) || event.shiftKey
                ? event.deltaX || event.deltaY
                : 0;
            if (!horizontalDelta) return;

            event.preventDefault();
            wheelDistance.current += horizontalDelta;
            if (Math.abs(wheelDistance.current) >= 55) {
              handleHorizontalGesture(wheelDistance.current > 0 ? 1 : -1);
            }
          }}
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(event) => {
            if (touchStartX.current === null) return;
            const touchEndX = event.changedTouches[0]?.clientX;
            if (touchEndX !== undefined && Math.abs(touchStartX.current - touchEndX) > 45) {
              handleHorizontalGesture(touchStartX.current > touchEndX ? 1 : -1);
            }
            touchStartX.current = null;
          }}
          className="max-w-full overflow-hidden rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
        >
          <LayoutGroup id="project-gallery">
            <div className="relative mx-auto w-full max-w-[1080px] pb-10">
              <div className="relative aspect-[25/9] w-full">
                <AnimatePresence initial={false} mode="popLayout" custom={navigationDirection}>
                  {galleryCards.map((card) => {
                    const { project, isSelected, position, width, zIndex, labelAlignment } = card;
                    const projectNumber = PROJECT_ORDER.indexOf(project.id) + 1;
                    const projectIdentifier = `PROJ_${String(projectNumber).padStart(2, '0')}`;
                    const positionPercent = `${position}%`;
                    const widthPercent = `${width}%`;
                    const cardStyle = {
                      left: positionPercent,
                      width: widthPercent,
                      height: '100%',
                      zIndex,
                    };
                    const layoutProps = {
                      layout: true,
                      layoutId: `project-card-${project.id}`,
                      style: cardStyle,
                      initial: { opacity: 0, scale: 0.98 },
                      animate: {
                        left: positionPercent,
                        opacity: 1,
                        scale: 1,
                        zIndex,
                      },
                      exit: { opacity: 0, scale: 0.98 },
                      transition: {
                        layout: { duration: 0.55, ease: GALLERY_EASE },
                        left: { duration: 0.55, ease: GALLERY_EASE },
                        opacity: { duration: 0.4 },
                      },
                    };

                    if (!isSelected) {
                      return (
                        <motion.button
                          key={project.id}
                          {...layoutProps}
                          type="button"
                          onClick={() => {
                            setNavigationDirection(
                              PROJECT_ORDER.indexOf(project.id) > PROJECT_ORDER.indexOf(activeProjectId)
                                ? 1
                                : -1
                            );
                            setActiveProjectId(project.id);
                          }}
                          aria-label={`Select ${projectIdentifier}`}
                          className={`absolute top-0 flex items-start overflow-hidden rounded-[16px] border border-blue-500/35 bg-deepNavy px-1 pt-2 text-left shadow-lg shadow-black/30 transition-colors hover:border-cyan-400/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 sm:rounded-[18px] sm:px-2 sm:pt-4 ${
                            labelAlignment === 'right' ? 'justify-end' : 'justify-start'
                          }`}
                        >
                          <span className="whitespace-nowrap font-mono text-[clamp(7px,0.8vw,12px)] tracking-tight text-cyan-300">
                            {projectIdentifier}
                          </span>
                        </motion.button>
                      );
                    }

                    return (
                      <motion.article
                        key={project.id}
                        {...layoutProps}
                        className="absolute top-0 flex min-w-0 flex-col overflow-hidden rounded-[18px] border border-cyan-500/60 bg-deepNavy p-2.5 shadow-2xl shadow-blue-950/50 sm:rounded-[20px] sm:p-5 lg:p-7"
                      >
                        <AnimatePresence mode="wait" initial={false}>
                          <motion.div
                            key={`project-content-${project.id}`}
                            initial={{ opacity: 0, x: navigationDirection * 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: navigationDirection * -10 }}
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            className="flex min-h-0 flex-1 flex-col"
                          >
                            <div className="grid min-h-0 flex-1 grid-cols-[1.15fr_0.85fr] gap-2 sm:gap-5">
                              <div className="flex min-w-0 flex-col overflow-hidden">
                                <span className="w-fit max-w-full truncate rounded-md border border-blue-500/30 bg-midnight px-2 py-1 text-[clamp(7px,0.8vw,11px)] font-mono uppercase tracking-wider text-cyan-300 sm:px-2.5">
                                  {project.category}
                                </span>
                                <h3 className="mt-1.5 text-[clamp(11px,1.8vw,22px)] font-bold leading-tight text-white sm:mt-2">
                                  {project.title}
                                </h3>
                                <p className="mt-1.5 overflow-hidden text-[clamp(7px,1vw,13px)] leading-[1.4] text-slate-300 sm:mt-3 sm:leading-relaxed">
                                  {project.description}
                                </p>
                                <div className="mt-auto min-h-0 overflow-hidden pt-1.5 sm:pt-3">
                                  <span className="mb-1 block text-[clamp(6px,0.7vw,10px)] font-mono uppercase tracking-wider text-slate-500">
                                    Technology Stack
                                  </span>
                                  <div className="flex max-h-full flex-wrap gap-1 overflow-hidden sm:gap-1.5">
                                    {project.technologies.map((technology) => (
                                      <span
                                        key={technology}
                                        className="rounded border border-borderNavy bg-midnight px-1 py-0.5 text-[clamp(6px,0.75vw,10px)] leading-tight text-slate-300 sm:px-2 sm:py-1"
                                      >
                                        {technology}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <div className="flex min-h-0 min-w-0 items-center justify-center">
                                <div className="aspect-[1300/600] w-full overflow-hidden rounded-l">
                                  <ProjectIllustration project={project} />
                                </div>
                              </div>
                            </div>

                            <div className="mt-1.5 flex shrink-0 flex-wrap items-center gap-1 border-t border-borderNavy pt-1.5 sm:mt-4 sm:gap-2 sm:pt-3">
                              <motion.button
                                type="button"
                                whileTap={{ scale: 0.96 }}
                                onClick={() => setModalProject(project)}
                                className="inline-flex items-center gap-1 rounded-md bg-blue-600 px-1.5 py-1 text-[clamp(7px,0.85vw,11px)] font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 sm:gap-1.5 sm:px-3 sm:py-2"
                              >
                                <span>System Architecture</span>
                                <ArrowUpRight className="h-3 w-3 shrink-0" />
                              </motion.button>
                              {project.repoUrl && (
                                <motion.a
                                  whileTap={{ scale: 0.96 }}
                                  href={project.repoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 rounded-md border border-borderNavy bg-midnight px-1.5 py-1 text-[clamp(7px,0.85vw,11px)] text-slate-300 transition-colors hover:border-slate-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 sm:gap-1.5 sm:px-3 sm:py-2"
                                >
                                  <Github className="h-3 w-3 shrink-0 text-cyan-400" />
                                  <span>GitHub</span>
                                </motion.a>
                              )}
                              <motion.a
                                whileTap={{ scale: 0.96 }}
                                href={project.videoDemoUrl || DEFAULT_VIDEO_DEMO_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 rounded-md border border-borderNavy bg-midnight px-1.5 py-1 text-[clamp(7px,0.85vw,11px)] text-slate-300 transition-colors hover:border-cyan-500/40 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 sm:gap-1.5 sm:px-3 sm:py-2"
                              >
                                <Play className="h-3 w-3 shrink-0 text-cyan-400" />
                                <span>Video Demo</span>
                              </motion.a>
                              <motion.a
                                whileTap={{ scale: 0.96 }}
                                href={project.websiteUrl || DEFAULT_WEBSITE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 rounded-md border border-borderNavy bg-midnight px-1.5 py-1 text-[clamp(7px,0.85vw,11px)] text-slate-300 transition-colors hover:border-cyan-500/40 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 sm:gap-1.5 sm:px-3 sm:py-2"
                              >
                                <Globe2 className="h-3 w-3 shrink-0 text-cyan-400" />
                                <span>Website</span>
                              </motion.a>
                              {project.demoUrl && (
                                <motion.a
                                  whileTap={{ scale: 0.96 }}
                                  href={project.demoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 rounded-md border border-borderNavy bg-midnight px-1.5 py-1 text-[clamp(7px,0.85vw,11px)] text-slate-300 transition-colors hover:border-blue-500/40 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400 sm:gap-1.5 sm:px-3 sm:py-2"
                                >
                                  <span>Live Demo</span>
                                  <ExternalLink className="h-3 w-3 shrink-0" />
                                </motion.a>
                              )}
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </motion.article>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          </LayoutGroup>
        </div>
      </div>

      <ProjectModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </section>
  );
};
