import { motion } from 'motion/react';
import { Briefcase, Rocket } from 'lucide-react';
import { Lang, translations } from '../translations';
import { SectionHeader } from './SectionHeader';

interface ExperienceProps {
  lang: Lang;
}

export function Experience({ lang }: ExperienceProps) {
  const t = translations[lang].experience;

  return (
    <section id="experiencia" className="py-24 bg-zinc-50 dark:bg-surface-alt">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader icon={Briefcase} title={t.title} />

        {/* Empty state */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center justify-center py-16 gap-5 text-center"
        >
          {/* Icon with glow */}
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full" />
            <div className="relative w-16 h-16 rounded-full border border-accent/30 bg-accent/5 flex items-center justify-center">
              <Rocket className="w-7 h-7 text-accent" />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2 max-w-sm">
            <p className="text-zinc-800 dark:text-zinc-200 font-semibold text-base">
              {t.emptyMessage}
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-500">{t.emptySubMessage}</p>
          </div>

          {/* Decorative dashed line */}
          <div className="flex flex-col items-center gap-3 mt-4">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-px h-8 border-l-2 border-dashed border-zinc-300 dark:border-zinc-700"
                style={{ opacity: 1 - i * 0.3 }}
              />
            ))}
            <div className="w-3 h-3 rounded-full border-2 border-accent/40 bg-accent/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
