import { motion } from 'motion/react';
import { GraduationCap, MapPin } from 'lucide-react';
import { Lang, translations } from '../translations';
import { SectionHeader } from './SectionHeader';

interface EducationProps {
  lang: Lang;
}

const educationData = {
  es: [
    {
      id: 1,
      institution: 'Universidad Tecnológica Nacional',
      subtitle: 'Regional Tucumán (UTN-FRT)',
      degree: 'Ingeniería en Sistemas de Información',
      start: 'Abril 2024',
      end: null as string | null,
      location: 'Tucumán, Argentina',
      description: null as string | null,
      isCurrent: true,
    },
  ],
  en: [
    {
      id: 1,
      institution: 'National Technological University',
      subtitle: 'Tucumán Regional (UTN-FRT)',
      degree: 'Information Systems Engineering',
      start: 'April 2024',
      end: null as string | null,
      location: 'Tucumán, Argentina',
      description: null as string | null,
      isCurrent: true,
    },
  ],
};

export function Education({ lang }: EducationProps) {
  const t = translations[lang].education;
  const entries = educationData[lang];

  return (
    <section id="formacion" className="py-24 bg-zinc-50 dark:bg-surface-alt">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader icon={GraduationCap} title={t.title} />

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-zinc-300 dark:via-zinc-700 to-transparent" />

          <div className="flex flex-col gap-8">
            {entries.map((entry, index) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-8"
              >
                {/* Node */}
                <div className="relative shrink-0 w-10 flex justify-center">
                  <div className="relative z-10 w-10 h-10 rounded-full border-2 border-accent bg-white dark:bg-surface-alt flex items-center justify-center shadow-md shadow-accent/20">
                    <GraduationCap className="w-4 h-4 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800/60 bg-white dark:bg-surface-card p-6 hover:border-accent/30 transition-all hover:shadow-md hover:shadow-accent/5">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-zinc-900 dark:text-white font-bold text-base">
                          {entry.institution}
                        </h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-500">{entry.subtitle}</p>
                      </div>

                      {/* Date badge */}
                      <div className="shrink-0">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono">
                          {entry.start} — {entry.isCurrent ? t.present : entry.end}
                        </span>
                      </div>
                    </div>

                    {/* Degree */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1 h-5 rounded-full bg-accent" />
                      <p className="text-zinc-700 dark:text-zinc-300 font-medium text-sm">
                        {entry.degree}
                      </p>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-zinc-400 dark:text-zinc-600">
                      <MapPin className="w-3.5 h-3.5" />
                      <span className="text-xs font-mono">{entry.location}</span>
                    </div>

                    {/* Description */}
                    {entry.description && (
                      <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        {entry.description}
                      </p>
                    )}

                    {/* Current badge */}
                    {entry.isCurrent && (
                      <div className="mt-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-xs text-accent font-mono">{t.present}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
