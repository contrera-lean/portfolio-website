export type Lang = 'es' | 'en';

export const translations = {
  es: {
    nav: {
      about: 'Sobre mí',
      projects: 'Proyectos',
      experience: 'Experiencia',
      stack: 'Stack',
      education: 'Formación',
      downloadCV: 'Descargar CV',
    },
    hero: {
      greeting: 'Hola, soy',
      subtitle: 'Desarrollo Full-Stack orientado a Back-End Python.',
      location: 'Tucumán, Argentina',
      scrollHint: 'Scroll para explorar',
    },
    about: {
      title: 'Sobre mí',
      items: [
        'Estudiante de **Ing. en Sistemas de Información** & Autodidacta.',
        'Investigando activamente cómo desarrollar sistemas más **robustos, escalables y confiables** usando conceptos modernos de **Ingeniería de Software Agéntica**.',
        'Utilizo **PlantUML** y **Notion** para el Análisis y Diseño de Sistemas.',
        'Uso **Cursor** y **Claude Code** como mis principales herramientas para la fase de desarrollo.',
        'Actualmente, me gustaría profundizar en conceptos de **Pruebas** y **Despliegue**.',
      ],
    },
    projects: {
      title: 'Proyectos Destacados',
      demo: 'Demo',
      github: 'GitHub',
      viewMore: 'Ver Más',
      privateRepo: 'Repositorio Privado',
      noDemo: 'Sin Demo',
      features: 'Funcionalidades',
      close: 'Cerrar',
    },
    experience: {
      title: 'Experiencia Laboral',
      emptyMessage: 'Actualmente construyendo mi camino profesional.',
      emptySubMessage: 'Cada proyecto personal es un paso hacia adelante.',
    },
    stack: {
      title: 'Stack Tecnológico',
      languages: 'Lenguajes',
      frameworks: 'Frameworks & Librerías',
      databases: 'Bases de Datos',
      tools: 'Herramientas & DevOps',
      aiTools: 'Herramientas de IA',
    },
    education: {
      title: 'Formación Académica',
      present: 'Actualidad',
    },
    certificates: {
      title: 'Certificados',
      emptyMessage: 'Próximamente — certificaciones en proceso.',
    },
    footer: {
      heading: '¿Conversamos?',
      subheading: 'Estoy abierto a oportunidades, colaboraciones y proyectos interesantes.',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'tu@email.com',
      messagePlaceholder: 'Cuéntame sobre tu proyecto...',
      send: 'Enviar mensaje',
      copyright: '© 2025 Leandro M. Contrera',
    },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      stack: 'Stack',
      education: 'Education',
      downloadCV: 'Download CV',
    },
    hero: {
      greeting: "Hi, I'm",
      subtitle: 'Full-Stack Developer focused on Python Back-End.',
      location: 'Tucumán, Argentina',
      scrollHint: 'Scroll to explore',
    },
    about: {
      title: 'About Me',
      items: [
        '**Systems Engineering** student & Self-taught developer.',
        'Actively researching how to build more **robust, scalable and reliable** systems using modern **Agentic Software Engineering** concepts.',
        'I use **PlantUML** and **Notion** for Systems Analysis and Design.',
        'I use **Cursor** and **Claude Code** as my main tools for the development phase.',
        "Currently, I'd like to deepen my knowledge in **Testing** and **Deployment** concepts.",
      ],
    },
    projects: {
      title: 'Featured Projects',
      demo: 'Demo',
      github: 'GitHub',
      viewMore: 'View More',
      privateRepo: 'Private Repo',
      noDemo: 'No Demo',
      features: 'Features',
      close: 'Close',
    },
    experience: {
      title: 'Work Experience',
      emptyMessage: 'Currently building my professional path.',
      emptySubMessage: 'Each personal project is a step forward.',
    },
    stack: {
      title: 'Tech Stack',
      languages: 'Languages',
      frameworks: 'Frameworks & Libraries',
      databases: 'Databases',
      tools: 'Tools & DevOps',
      aiTools: 'AI Tools',
    },
    education: {
      title: 'Academic Background',
      present: 'Present',
    },
    certificates: {
      title: 'Certificates',
      emptyMessage: 'Coming Soon — certifications in progress.',
    },
    footer: {
      heading: "Let's Talk?",
      subheading: "I'm open to opportunities, collaborations, and interesting projects.",
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your@email.com',
      messagePlaceholder: 'Tell me about your project...',
      send: 'Send message',
      copyright: '© 2025 Leandro M. Contrera',
    },
  },
} as const;

export const projectData = {
  es: [
    {
      id: 1,
      title: 'Sistema de Facturación y Control de Inventario',
      description:
        'Sistema web integral para la gestión de facturación electrónica y control de inventario empresarial, con panel administrativo y reportes en tiempo real.',
      tags: ['Python', 'Django', 'Tailwind', 'HTMX', 'Alpine.js'],
      date: 'Enero 2025 — Actualidad',
      demoUrl: null as null | string,
      githubUrl: null as null | string,
      isPrivate: true,
      features: [
        'Módulo de facturación electrónica con PDF',
        'Gestión de productos e inventario en tiempo real',
        'Panel de administración personalizado',
        'Reportes y estadísticas con gráficos',
        'Autenticación con roles y permisos',
      ],
    },
  ],
  en: [
    {
      id: 1,
      title: 'Invoicing & Inventory Control System',
      description:
        'Comprehensive web system for electronic invoicing management and business inventory control, with admin dashboard and real-time reports.',
      tags: ['Python', 'Django', 'Tailwind', 'HTMX', 'Alpine.js'],
      date: 'January 2025 — Present',
      demoUrl: null as null | string,
      githubUrl: null as null | string,
      isPrivate: true,
      features: [
        'Electronic invoicing module with PDF export',
        'Real-time product & inventory management',
        'Custom administration dashboard',
        'Reports and statistics with charts',
        'Authentication with roles and permissions',
      ],
    },
  ],
};
