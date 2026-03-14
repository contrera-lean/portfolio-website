import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  mb?: 'mb-10' | 'mb-12';
}

export function SectionHeader({ icon: Icon, title, mb = 'mb-12' }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex items-center gap-3 ${mb}`}
    >
      <div className="p-2 rounded-lg bg-accent/10 border border-accent/20">
        <Icon className="w-5 h-5 text-accent" />
      </div>
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
        {title}
      </h2>
      <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800" />
    </motion.div>
  );
}
