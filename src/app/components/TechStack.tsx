import { motion } from 'motion/react';
import { Layers, Sparkles, BotMessageSquare } from 'lucide-react';
import { Lang, translations } from '../translations';
import { SectionHeader } from './SectionHeader';

interface TechStackProps {
  lang: Lang;
}

interface Tech {
  name: string;
  icon?: string;
  emoji?: string;
  note?: string;
  useIcon?: 'sparkles' | 'bot';
}

const stack: Record<string, Tech[]> = {
  languages: [
    {
      name: 'Python',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
      note: 'Principal',
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      note: 'Frontend',
    },
    {
      name: 'C',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
      note: 'Académico',
    },
    {
      name: 'HTML',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
      note: 'Markup',
    },
    {
      name: 'CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
      note: 'Estilos',
    },
  ],
  frameworks: [
    {
      name: 'Django',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg',
      note: 'Web framework',
    },
    {
      name: 'FastAPI',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
      note: 'REST APIs',
    },
    {
      name: 'Tailwind',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      note: 'CSS utility',
    },
    {
      name: 'HTMX',
      emoji: '⚡',
      note: 'Dynamic HTML',
    },
    {
      name: 'Alpine.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/alpinejs/alpinejs-original.svg',
      note: 'Minimal JS',
    },
  ],
  databases: [
    {
      name: 'PostgreSQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
      note: 'Producción',
    },
    {
      name: 'MySQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
      note: 'Relacional',
    },
    {
      name: 'SQLite',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg',
      note: 'Desarrollo',
    },
  ],
  tools: [
    {
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
      note: 'Control de versiones',
    },
    {
      name: 'Docker',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
      note: 'Contenedores',
    },
    {
      name: 'Linux',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
      note: 'OS principal',
    },
    {
      name: 'VS Code',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
      note: 'Editor',
    },
    {
      name: 'Cursor',
      useIcon: 'sparkles',
      note: 'AI-powered IDE',
    },
    {
      name: 'PlantUML',
      emoji: '📐',
      note: 'Diagramas UML',
    },
    {
      name: 'Notion',
      emoji: '📝',
      note: 'Documentación',
    },
  ],
  ai: [
    {
      name: 'Claude Code',
      useIcon: 'bot',
      note: 'Anthropic',
    },
    {
      name: 'Figma AI',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
      note: 'Design AI',
    },
  ],
};

function TechBadge({ tech }: { tech: Tech }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="group relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800/70 bg-white dark:bg-surface-card hover:border-accent/50 dark:hover:border-accent/40 hover:shadow-md hover:shadow-accent/5 transition-all cursor-default"
    >
      {/* Icon */}
      <div className="w-6 h-6 flex items-center justify-center shrink-0">
        {tech.icon ? (
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-6 h-6 object-contain"
            style={{
              filter:
                tech.name === 'Django'
                  ? 'brightness(0) invert(0.6) sepia(1) saturate(2) hue-rotate(100deg)'
                  : 'none',
            }}
          />
        ) : tech.emoji ? (
          <span className="text-base">{tech.emoji}</span>
        ) : tech.useIcon === 'sparkles' ? (
          <Sparkles className="w-4 h-4 text-accent" />
        ) : (
          <BotMessageSquare className="w-4 h-4 text-accent" />
        )}
      </div>

      {/* Name */}
      <span className="text-sm text-zinc-700 dark:text-zinc-300 font-medium group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
        {tech.name}
      </span>

      {/* Tooltip */}
      {tech.note && (
        <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-zinc-900 dark:bg-zinc-700 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 shadow-lg">
          {tech.note}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-zinc-900 dark:border-t-zinc-700" />
        </div>
      )}
    </motion.div>
  );
}

export function TechStack({ lang }: TechStackProps) {
  const t = translations[lang].stack;

  const categories = [
    { key: 'languages', label: t.languages, techs: stack.languages },
    { key: 'frameworks', label: t.frameworks, techs: stack.frameworks },
    { key: 'databases', label: t.databases, techs: stack.databases },
    { key: 'tools', label: t.tools, techs: stack.tools },
    { key: 'ai', label: t.aiTools, techs: stack.ai },
  ];

  return (
    <section id="stack" className="py-24 bg-white dark:bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader icon={Layers} title={t.title} />

        {/* Categories */}
        <div className="flex flex-col gap-10">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.08 }}
            >
              {/* Category label */}
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs text-accent tracking-widest uppercase">
                  // {cat.label}
                </span>
                <div className="flex-1 h-px bg-zinc-100 dark:bg-zinc-800/60" />
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2.5">
                {cat.techs.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <TechBadge tech={tech} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
