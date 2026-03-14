import { motion } from 'motion/react';
import { User } from 'lucide-react';
import { Lang, translations } from '../translations';
import { SectionHeader } from './SectionHeader';

interface AboutProps {
  lang: Lang;
}

function highlightKeywords(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-accent font-medium">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export function About({ lang }: AboutProps) {
  const t = translations[lang].about;

  return (
    <section
      id="sobre-mi"
      className="py-24 bg-zinc-50 dark:bg-surface-alt"
    >
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader icon={User} title={t.title} mb="mb-10" />

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-zinc-200 dark:border-zinc-800/60 bg-white dark:bg-surface-card p-8 shadow-sm dark:shadow-accent/5"
        >
          {/* Terminal top bar */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-zinc-100 dark:border-zinc-800">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <span className="ml-2 font-mono text-xs text-zinc-400 dark:text-zinc-600">
              ~/about/leandro.md
            </span>
          </div>

          <ul className="flex flex-col gap-4">
            {t.items.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400 leading-relaxed"
              >
                <span className="font-mono text-accent mt-0.5 shrink-0" style={{ fontWeight: 400 }}>
                  ›
                </span>
                <span>{highlightKeywords(item)}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
