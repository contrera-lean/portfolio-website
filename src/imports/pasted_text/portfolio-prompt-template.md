# 🎨 Prompt Template — Portfolio Personal
> Plantilla reutilizable para Google Stitch. Completá los bloques de datos de cada sección antes de enviar.

---

## 📋 DATOS GENERALES
```
NOMBRE: Leandro M. Contrera
TITULO: Desarrollo Full-Stack orientado a Back-End Python.        
UBICACION: Tucumán, Argentina
FOTO: -
EMAIL: lean.contrera3004@gmail.com
GITHUB:           https://github.com/contrera-lean
LINKEDIN:         www.linkedin.com/in/contrera-lean
CV:               [URL del archivo]
COLOR ACENTO:     electro-blue
IDIOMA DEFAULT:   [Español / Inglés]
TAB TITLE:        Portfolio | Leandro M. Contrera
FAVICON:          Icono de maletín negro
```

---

## 🎨 ESTILO GENERAL
Modern, responsive portfolio. Dark mode as default with light mode toggle. Developer-oriented visual language: subtle code/terminal motifs, clean typography (Inter + JetBrains Mono), cohesive accent color (see data above). Fully responsive, mobile-first.

---

## 🔝 NAVEGACIÓN
```
NOMBRE EN NAVBAR:     
LINKS:            Sobre mí · Proyectos Destacados · Experiencia Laboral · Stack · Formación
```
- **Left:** `</>` icon + `[NOMBRE EN NAVBAR]`
- **Center links:** según lista anterior
- **Right actions:**
  - `Descargar CV` button (filled, accent color)
  - Theme toggle (sun/moon icon)
  - Language switcher (🇦🇷 ↔ 🇺🇸 flag toggle, ES ↔ EN)

---

## 1. HERO / PRESENTACIÓN
```
NOMBRE:           [igual que datos generales]
SUBTITULO:        
UBICACION:        [igual que datos generales]
REDES:            GitHub · LinkedIn · Email
FONDO ANIMADO:    [ej: partículas de código / gradient mesh / otro]
```
**Layout:** Two-column — text block on the left, circular profile picture on the right.
- Large name heading
- Subtitle
- 📍 Ubicación
- Row of social icon buttons

---

## 2. SOBRE MÍ
```
ITEMS (bullet list, keywords importantes entre ** para resaltarlas en color acento):
- Estudiante de Ing. Sistemas de Información & Autodidacta
- Investigando activamente sobre como desarrollar sistemas más robustos, escalables y confiables usando conceptos modernos de Ingeniería de Software Agéntica.
- Utilizo PlantUML y Notion para el Análisis y Diseño de Sistemas.
- Uso Cursor y Claude Code como mis principales herramientas para la fase de desarrollo.
- Actualmente, me gustaría profundizar en conceptos de Pruebas y Despliegue.

```
**Layout:** Bordered card with section title. Keywords wrapped in `**` will be highlighted in accent color.

---

## 3. PROYECTOS DESTACADOS
```
PROYECTO 1:
  TITULO: Sistema de Facturación y Control de Inventario        
  DESCRIPCION:    
  TAGS:           [ej: Python, Django, Tailwind, HTMX, Alpine]
  FECHA: Enero 2025 - ACTUALIDAD         
  DEMO URL:       
  GITHUB URL: Repositorio privado    
  CAPTURAS:       [URLs de imágenes para el modal]
  FUNCIONES:      
    - 
    - 

PROYECTO 2:
  TITULO:         
  DESCRIPCION:    
  TAGS:           
  FECHA:          
  DEMO URL:       
  GITHUB URL:     
  CAPTURAS:       
  FUNCIONES:      
    - 
    - 
```
- Horizontal carousel of project cards (cover · title · description · tags · date · buttons: Demo · GitHub · Ver Más)
- **"Ver Más" → Modal:** left column image carousel + right column feature list · Close (X) top-right

---

## 4. EXPERIENCIA LABORAL
```
EXPERIENCIAS:
  EMPRESA:        
  PUESTO:         
  FECHA INICIO:   
  FECHA FIN:      [o "Actualidad"]
  DESCRIPCION:    

  [dejar vacío si no hay experiencia formal]

MENSAJE SI NO HAY EXPERIENCIA:
  [ej: "Actualmente construyendo mi camino profesional"]
```
- Vertical timeline layout (line with nodes)
- If no experience: display the custom message in a polished, honest style

---

## 5. STACK TECNOLÓGICO
```
LANGUAGES:        [ej: C, Python, JavaScript, HTML, CSS]
FRAMEWORKS:       [ej: Django, FastAPI]
DATABASES:        [ej: SQLite, PostgreSQL, MySQL]
TOOLS & DEVOPS:   [ej: Git, Docker, Linux, VS Code, Cursor]
AI TOOLS:         Claude Code (Anthropic), Figma AI
```
- Categorized grid of tech badges: **official icon** (from devicons.dev) + name per tech
- Badge style: rounded pill, icon left + name right, subtle accent color border
- Hover effect showing proficiency level or short note
- For Claude Code: use Anthropic logo or AI sparkle icon

---

## 6. FORMACIÓN ACADÉMICA
```
ENTRADA 1:
  INSTITUCIÓN: Universidad Tecnológica Nacional - Regional Tucumán (UTN-FRT)    
  TITULO: Ingeniería en Sistemas de Información         
  FECHA INICIO: Abril 2024   
  FECHA FIN: Actualidad
  DESCRIPCION:    

ENTRADA 2:
  INSTITUCIÓN:    
  TITULO:         
  FECHA INICIO:   
  FECHA FIN:      
  DESCRIPCION:    
```
- Vertical history timeline: institution · degree · date range · description · logo placeholder

---

## 7. CERTIFICADOS
```
CERTIFICADO 1:
  TITULO:         
  ORGANIZACIÓN:   
  FECHA:          
  IMAGEN:         [URL o placeholder]

CERTIFICADO 2:
  TITULO:         
  ORGANIZACIÓN:   
  FECHA:          
  IMAGEN:         
```
- Horizontal scrollable carousel of certificate cards
- Each card: thumbnail · title · issuing org · date
- Hover: zoom + shadow lift

---

## FOOTER / CONTACTO
```
HEADING:          [ej: "Conversamos?"]
FORMULARIO:       sí
EMAIL VISIBLE:    no
COPYRIGHT:        © 2025 Leandro M. Contrera
```
- Contact form or mailto button + repeated social links
- Copyright line

---

**Design constraints:** smooth scroll · scroll-triggered fade-in animations · accessible contrast in both themes · 8px spacing grid