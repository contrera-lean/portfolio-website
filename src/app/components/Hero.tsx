import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { MapPin, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { Lang, translations } from '../translations';

interface HeroProps {
  lang: Lang;
}

const CODE_SYMBOLS = [
  '{}', '<>', '//', '=>', 'def', 'class', 'import', 'return', '()', '[]',
  'if', 'for', 'async', 'await', '!=', '==', '&&', '||', '0x', '...',
  'try', 'else', 'True', 'None', 'self', 'pass', 'yield', 'lambda',
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  fontSize: number;
  symbol: string;
  life: number;
  maxLife: number;
}

function createParticle(width: number, height: number, randomY = false): Particle {
  return {
    x: Math.random() * width,
    y: randomY ? Math.random() * height : height + 20,
    vx: (Math.random() - 0.5) * 0.4,
    vy: -(Math.random() * 0.5 + 0.2),
    opacity: Math.random() * 0.18 + 0.04,
    fontSize: Math.floor(Math.random() * 5 + 10),
    symbol: CODE_SYMBOLS[Math.floor(Math.random() * CODE_SYMBOLS.length)],
    life: 0,
    maxLife: Math.random() * 300 + 200,
  };
}

export function Hero({ lang }: HeroProps) {
  const t = translations[lang];
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Init particles
    particlesRef.current = Array.from({ length: 60 }, () =>
      createParticle(canvas.width, canvas.height, true)
    );

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `400 14px 'JetBrains Mono', monospace`;

      particlesRef.current.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        const fadeIn = Math.min(p.life / 40, 1);
        const fadeOut = Math.max((p.maxLife - p.life) / 40, 0);
        const alpha = p.opacity * Math.min(fadeIn, fadeOut);

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = '#00d4ff';
        ctx.font = `400 ${p.fontSize}px 'JetBrains Mono', monospace`;
        ctx.fillText(p.symbol, p.x, p.y);
        ctx.restore();

        if (p.life >= p.maxLife || p.y < -30) {
          particlesRef.current[i] = createParticle(canvas.width, canvas.height);
        }
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-surface"
    >
      {/* Radial glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/[0.03] blur-[100px]" />
      </div>

      {/* Canvas animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60 dark:opacity-100"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col gap-5"
          >
            {/* Terminal tag */}
            <div className="flex items-center gap-2 w-fit">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-xs text-accent tracking-widest uppercase">
                {t.hero.greeting}
              </span>
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-zinc-900 dark:text-white font-bold leading-tight" style={{ lineHeight: 1.05 }}>
              Leandro
              <br />
              <span className="text-accent">Contrera</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 max-w-md">
              {t.hero.subtitle}
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-500">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm font-mono">{t.hero.location}</span>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://github.com/contrera-lean"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent transition-all text-sm group"
              >
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/contrera-lean"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent transition-all text-sm group"
              >
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
              <a
                href="mailto:lean.contrera3004@gmail.com"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent transition-all text-sm group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Email
              </a>
            </div>
          </motion.div>

          {/* Right — Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 to-transparent blur-2xl scale-110" />

              {/* Outer ring */}
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full border-2 border-accent/30 flex items-center justify-center">
                {/* Spinning dashes */}
                <div
                  className="absolute inset-0 rounded-full border-2 border-dashed border-accent/20"
                  style={{ animation: 'spin 20s linear infinite' }}
                />

                {/* Inner avatar */}
                <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 dark:from-zinc-800 dark:to-surface-alt border border-zinc-700/50 flex flex-col items-center justify-center gap-3 relative overflow-hidden">
                  {/* Background grid */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />
                  {/* Initials */}
                  <span
                    className="font-mono text-accent relative z-10 font-bold"
                    style={{ fontSize: '3.5rem', lineHeight: 1 }}
                  >
                    LC
                  </span>
                  <span className="font-mono text-xs text-zinc-500 relative z-10 tracking-widest">
                    {'<dev />'}
                  </span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-zinc-500 dark:text-zinc-600 font-mono tracking-widest">
            {t.hero.scrollHint}
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4 text-accent" />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
