import { motion } from 'motion/react';
import { Award } from 'lucide-react';
import { Lang, translations } from '../translations';
import { SectionHeader } from './SectionHeader';

interface CertificatesProps {
  lang: Lang;
}

export function Certificates({ lang }: CertificatesProps) {
  const t = translations[lang].certificates;

  return (
    <section id="certificados" className="py-24 bg-white dark:bg-surface">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader icon={Award} title={t.title} />

        {/* Empty state */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center justify-center py-16 gap-5 text-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full" />
            <div className="relative w-16 h-16 rounded-full border border-accent/30 bg-accent/5 flex items-center justify-center">
              <Award className="w-7 h-7 text-accent" />
            </div>
          </div>

          <p className="text-zinc-800 dark:text-zinc-200 font-semibold text-base">
            {t.emptyMessage}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
