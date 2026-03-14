import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FolderOpen, Github, ExternalLink, ChevronRight, Lock, X, Calendar, CheckCircle2 } from 'lucide-react';
import { Lang, translations, projectData } from '../translations';
import { SectionHeader } from './SectionHeader';

interface ProjectsProps {
  lang: Lang;
}

export function Projects({ lang }: ProjectsProps) {
  const t = translations[lang].projects;
  const projects = projectData[lang];
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  return (
    <section id="proyectos" className="py-24 bg-white dark:bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader icon={FolderOpen} title={t.title} />

        {/* Projects carousel */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="snap-start shrink-0 w-full sm:w-[420px] lg:w-[480px]"
            >
              <div className="h-full rounded-2xl border border-zinc-200 dark:border-zinc-800/60 bg-zinc-50 dark:bg-surface-card overflow-hidden group hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
                {/* Card top bar */}
                <div className="h-32 bg-gradient-to-br from-accent/10 via-zinc-800/5 to-zinc-900/10 dark:from-accent/10 dark:via-zinc-800 dark:to-surface-alt relative overflow-hidden flex items-center justify-center border-b border-zinc-200 dark:border-zinc-800/60">
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(0,212,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.5) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                  <span className="font-mono text-4xl text-accent/30 select-none">{'{ }'}</span>
                  {/* Date badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    <Calendar className="w-3 h-3 text-accent" />
                    <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">{project.date}</span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col gap-4">
                  <h3 className="text-zinc-900 dark:text-white font-semibold text-base leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-xs font-mono border border-accent/30 text-accent bg-accent/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-2">
                    {/* Demo */}
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3.5 py-2 bg-accent hover:bg-accent-dark text-surface text-xs rounded-full font-semibold transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        {t.demo}
                      </a>
                    ) : (
                      <span className="flex items-center gap-1.5 px-3.5 py-2 text-zinc-400 dark:text-zinc-600 text-xs rounded-full border border-zinc-200 dark:border-zinc-800 cursor-not-allowed">
                        <ExternalLink className="w-3.5 h-3.5" />
                        {t.noDemo}
                      </span>
                    )}

                    {/* GitHub */}
                    {project.isPrivate ? (
                      <span className="flex items-center gap-1.5 px-3.5 py-2 text-zinc-400 dark:text-zinc-600 text-xs rounded-full border border-zinc-200 dark:border-zinc-800 cursor-not-allowed">
                        <Lock className="w-3.5 h-3.5" />
                        {t.privateRepo}
                      </span>
                    ) : (
                      <a
                        href={project.githubUrl ?? '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3.5 py-2 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent text-xs rounded-full transition-all"
                      >
                        <Github className="w-3.5 h-3.5" />
                        {t.github}
                      </a>
                    )}

                    {/* Ver Más */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="ml-auto flex items-center gap-1 text-xs text-accent hover:text-accent-dark transition-colors font-medium"
                    >
                      {t.viewMore}
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full max-w-xl bg-white dark:bg-surface-card rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden">
                {/* Modal header */}
                <div className="flex items-start justify-between p-6 border-b border-zinc-100 dark:border-zinc-800">
                  <div className="flex flex-col gap-1.5 flex-1 pr-4">
                    <h3 className="text-zinc-900 dark:text-white font-bold text-lg">
                      {selectedProject.title}
                    </h3>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-accent" />
                      <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                        {selectedProject.date}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-lg text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all shrink-0"
                    aria-label={t.close}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Modal body */}
                <div className="p-6 flex flex-col gap-5">
                  {/* Description */}
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-xs font-mono border border-accent/30 text-accent bg-accent/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div>
                    <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-3">
                      {t.features}
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                          <span className="text-sm text-zinc-600 dark:text-zinc-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer links */}
                  <div className="flex gap-3 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                    {selectedProject.isPrivate ? (
                      <span className="flex items-center gap-1.5 px-4 py-2 text-zinc-400 dark:text-zinc-600 text-sm rounded-full border border-zinc-200 dark:border-zinc-800 cursor-not-allowed">
                        <Lock className="w-4 h-4" />
                        {t.privateRepo}
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
