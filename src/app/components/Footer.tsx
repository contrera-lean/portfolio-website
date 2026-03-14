import { useState } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Send, Heart, Code2 } from 'lucide-react';
import { Lang, translations } from '../translations';

interface FooterProps {
  lang: Lang;
}

export function Footer({ lang }: FooterProps) {
  const t = translations[lang].footer;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Contacto desde portfolio — ${formData.name}`;
    const body = `Nombre: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    window.open(
      `mailto:lean.contrera3004@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    );
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <footer id="contacto" className="bg-zinc-50 dark:bg-surface-alt border-t border-zinc-200 dark:border-zinc-800/60">
      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-white mb-3">
            {t.heading}
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-md mx-auto">{t.subheading}</p>
        </motion.div>

        {/* Form + Socials */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono text-zinc-500 dark:text-zinc-400" htmlFor="name">
                  name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder={t.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-surface-card text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all text-sm"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono text-zinc-500 dark:text-zinc-400" htmlFor="email">
                  email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder={t.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-surface-card text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all text-sm"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-mono text-zinc-500 dark:text-zinc-400" htmlFor="message">
                message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder={t.messagePlaceholder}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-surface-card text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition-all text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark active:scale-95 text-surface rounded-xl font-semibold text-sm transition-all shadow-lg shadow-accent/20"
            >
              {sent ? (
                <>
                  <span>✓</span>
                  {lang === 'es' ? '¡Mensaje enviado!' : 'Message sent!'}
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  {t.send}
                </>
              )}
            </button>
          </motion.form>

          {/* Sidebar — socials */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <p className="text-xs font-mono text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">
              // {lang === 'es' ? 'Redes' : 'Socials'}
            </p>

            {[
              {
                icon: Github,
                label: 'GitHub',
                handle: '@contrera-lean',
                href: 'https://github.com/contrera-lean',
              },
              {
                icon: Linkedin,
                label: 'LinkedIn',
                handle: 'contrera-lean',
                href: 'https://www.linkedin.com/in/contrera-lean',
              },
              {
                icon: Mail,
                label: 'Email',
                handle: 'lean.contrera3004@gmail.com',
                href: 'mailto:lean.contrera3004@gmail.com',
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/60 bg-white dark:bg-surface-card hover:border-accent/40 hover:shadow-md hover:shadow-accent/5 transition-all group"
              >
                <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800/60 group-hover:bg-accent/10 group-hover:text-accent transition-all">
                  <social.icon className="w-4 h-4 text-zinc-500 dark:text-zinc-400 group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    {social.label}
                  </p>
                  <p className="text-xs text-zinc-400 dark:text-zinc-600 font-mono truncate max-w-[180px]">
                    {social.handle}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Logo */}
          <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-500">
            <Code2 className="w-4 h-4 text-accent" />
            <span className="font-mono text-sm">{t.copyright}</span>
          </div>

          {/* Built with */}
          <p className="text-xs text-zinc-400 dark:text-zinc-600 flex items-center gap-1.5">
            {lang === 'es' ? 'Hecho con' : 'Built with'}
            <Heart className="w-3 h-3 text-accent" />
            React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
