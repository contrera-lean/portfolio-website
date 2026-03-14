import { useState, useEffect } from 'react';
import { Lang } from './translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { TechStack } from './components/TechStack';
import { Education } from './components/Education';
import { Certificates } from './components/Certificates';
import { Footer } from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState<Lang>('es');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    document.title = 'Portfolio | Leandro Contrera';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-surface text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      <Navbar isDark={isDark} setIsDark={setIsDark} lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Projects lang={lang} />
        <Experience lang={lang} />
        <TechStack lang={lang} />
        <Education lang={lang} />
        <Certificates lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
