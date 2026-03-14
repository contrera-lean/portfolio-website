import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Code2, Sun, Moon, Menu, X, Download } from 'lucide-react';
import { Lang, translations } from '../translations';

interface NavbarProps {
  isDark: boolean;
  setIsDark: (v: boolean) => void;
  lang: Lang;
  setLang: (v: Lang) => void;
}

const navLinks = [
  { key: 'about', href: '#sobre-mi' },
  { key: 'projects', href: '#proyectos' },
  { key: 'experience', href: '#experiencia' },
  { key: 'stack', href: '#stack' },
  { key: 'education', href: '#formacion' },
] as const;

export function Navbar({ isDark, setIsDark, lang, setLang }: NavbarProps) {
  const t = translations[lang].nav;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkLabels: Record<string, string> = {
    about: t.about,
    projects: t.projects,
    experience: t.experience,
    stack: t.stack,
    education: t.education,
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-surface/90 backdrop-blur-xl shadow-sm border-b border-zinc-200/50 dark:border-zinc-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <Code2 className="w-5 h-5 text-accent" />
            <span className="font-mono text-sm text-accent group-hover:opacity-80 transition-opacity">
              lc.dev
            </span>
          </a>

          {/* Center Links — desktop */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-accent dark:hover:text-accent transition-colors"
              >
                {linkLabels[link.key]}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Download CV */}
            <a
              href="#"
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 bg-accent hover:bg-accent-dark text-surface text-xs rounded-full font-semibold transition-colors"
            >
              <Download className="w-3 h-3" />
              {t.downloadCV}
            </a>

            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full text-zinc-500 dark:text-zinc-400 hover:text-accent dark:hover:text-accent hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-all"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="flex items-center gap-1 px-2 py-1.5 rounded-full text-zinc-500 dark:text-zinc-400 hover:text-accent dark:hover:text-accent hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-all"
            >
              <span className="text-sm">{lang === 'es' ? '🇦🇷' : '🇺🇸'}</span>
              <span className="font-mono text-xs">{lang.toUpperCase()}</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-all"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 dark:bg-surface/95 backdrop-blur-xl border-t border-zinc-200/50 dark:border-zinc-800/50 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-zinc-600 dark:text-zinc-300 hover:text-accent dark:hover:text-accent py-2 px-2 text-sm transition-colors rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/40"
                >
                  {linkLabels[link.key]}
                </a>
              ))}
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 bg-accent text-surface text-sm rounded-full font-semibold w-fit mt-2"
              >
                <Download className="w-3.5 h-3.5" />
                {t.downloadCV}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
