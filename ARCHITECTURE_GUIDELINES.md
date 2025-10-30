# 📋 Guía de Arquitectura y Buenas Prácticas - WebTools Suite

## 📌 Tabla de Contenidos

- [Información General](#información-general)
- [Arquitectura del Proyecto](#arquitectura-del-proyecto)
- [Stack Tecnológico](#stack-tecnológico)
- [Estructura de Archivos](#estructura-de-archivos)
- [Reglas de Diseño](#reglas-de-diseño)
- [Buenas Prácticas de Desarrollo](#buenas-prácticas-de-desarrollo)
- [Optimización y Performance](#optimización-y-performance)
- [Seguridad](#seguridad)
- [SEO y Accesibilidad](#seo-y-accesibilidad)
- [Deployment](#deployment)
- [Checklist de Nuevas Herramientas](#checklist-de-nuevas-herramientas)

---

## 📖 Información General

**Nombre del Proyecto:** WebTools Suite  
**Descripción:** Suite de herramientas web gratuitas para desarrolladores  
**Versión:** 1.0.0  
**Autor:** Fabricio Hernández  
**Licencia:** MIT

### Principios Fundamentales

1. **100% Procesamiento Local** - Sin envío de datos a servidores
2. **Privacy First** - Cero rastreadores, cero cookies de terceros
3. **Performance Optimizado** - Carga rápida, interacciones suaves
4. **Mobile First** - Responsive en todos los dispositivos
5. **Accesibilidad** - Cumplimiento de estándares WCAG

---

## 🏗️ Arquitectura del Proyecto

### Patrón Arquitectónico

**Static Site Generation (SSG)** con Astro + Client-Side Hydration

```
┌─────────────────────────────────────────┐
│         Astro Build (SSG)               │
│  ┌───────────────────────────────────┐  │
│  │   Layout.astro (Base Template)    │  │
│  │   ├─ Meta tags & SEO              │  │
│  │   ├─ Firebase Init                │  │
│  │   └─ Global Styles                │  │
│  └───────────────────────────────────┘  │
│                                          │
│  ┌───────────────────────────────────┐  │
│  │   Pages (Static Routes)           │  │
│  │   ├─ index.astro (Landing)        │  │
│  │   ├─ md-to-pdf.astro              │  │
│  │   ├─ image-optimizer.astro        │  │
│  │   ├─ qr-generator.astro           │  │
│  │   └─ [tool-name].astro            │  │
│  └───────────────────────────────────┘  │
│                                          │
│  ┌───────────────────────────────────┐  │
│  │   Components (Reusables)          │  │
│  │   ├─ ToolHeader.astro             │  │
│  │   ├─ ToolCard.astro               │  │
│  │   ├─ Hero.astro                   │  │
│  │   ├─ Footer.astro                 │  │
│  │   └─ ThemeToggle.astro            │  │
│  └───────────────────────────────────┘  │
│                                          │
│  ┌───────────────────────────────────┐  │
│  │   Client-Side Logic (Browser)     │  │
│  │   ├─ HTML2PDF.js (Markdown)       │  │
│  │   ├─ Canvas API (Images)          │  │
│  │   ├─ QRCode.js (QR Gen)           │  │
│  │   └─ Firebase (Analytics)         │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

### Flujo de Datos

```
User Request → Static HTML (Astro) → Client Hydration → User Interaction → Browser Processing → Result
```

**Clave:** NO hay backend. Todo el procesamiento ocurre en el navegador del usuario.

---

## 💻 Stack Tecnológico

### Core Framework

- **Astro 5.14.5** - SSG Framework
- **TypeScript** - Type safety en configuración

### Librerías de Procesamiento

- **marked ^16.4.0** - Markdown parsing
- **html2pdf.js ^0.10.2** - PDF generation
- **qrcode ^1.5.4** - QR code generation
- **dompurify ^3.3.0** - HTML sanitization

### Sistema de Favoritos

- **localStorage** - Persistencia local de favoritos (máximo 8 herramientas)
- **Custom Events** - Comunicación entre componentes para actualizar UI
- **Toast Notifications** - Feedback visual de acciones

### Servicios

- **Firebase 12.4.0**
  - Analytics (opcional, con consentimiento)
  - Remote Config (feature flags, maintenance mode)

### Build Tools

- **Vite** (incluido en Astro)
- **Terser ^5.44.0** - Minificación avanzada
- **esbuild** - Transpilación rápida

---

## 📁 Estructura de Archivos

```
red-remnant/
├── public/                     # Assets estáticos (sin procesamiento)
│   ├── _headers               # Headers HTTP para Netlify/Vercel
│   ├── robots.txt             # SEO crawlers
│   ├── sitemap.xml            # Mapa del sitio
│   └── site.webmanifest       # PWA manifest
│
├── src/
│   ├── assets/                # Assets que Astro procesa
│   │
│   ├── components/            # Componentes reutilizables
│   │   ├── AboutSection.astro
│   │   ├── AdSenseBanner.astro
│   │   ├── AdManager.astro
│   │   ├── FavoritesBar.astro # Barra de favoritos flotante
│   │   ├── FeaturesSection.astro
│   │   ├── FloatingSupportBanner.astro
│   │   ├── Footer.astro       # Footer global
│   │   ├── Hero.astro         # Hero de landing
│   │   ├── MaintenanceMode.astro
│   │   ├── SupportBanner.astro
│   │   ├── ThemeToggle.astro  # Dark mode toggle
│   │   ├── ToolCard.astro     # Card de herramienta con botón favorito
│   │   ├── ToolHeader.astro   # Header de cada tool
│   │   └── Welcome.astro
│   │
│   ├── layouts/
│   │   └── Layout.astro       # Layout base (meta tags, scripts)
│   │
│   ├── lib/
│   │   ├── favorites.ts       # Sistema de favoritos (localStorage)
│   │   └── firebase.ts        # Firebase config & helpers
│   │
│   ├── pages/                 # Rutas del sitio (file-based routing)
│   │   ├── index.astro        # Landing page
│   │   ├── md-to-pdf.astro
│   │   ├── image-optimizer.astro
│   │   ├── qr-generator.astro
│   │   ├── lorem-ipsum.astro
│   │   ├── password-generator.astro
│   │   ├── password-checker.astro
│   │   ├── uuid-generator.astro
│   │   └── service-status.astro
│   │
│   └── types/                 # TypeScript type definitions
│       ├── html2pdf.d.ts
│       └── qrcode.d.ts
│
├── astro.config.mjs           # Configuración de Astro
├── tsconfig.json              # TypeScript config
├── package.json
├── build-and-package.ps1      # Script de build para Windows
├── build-and-package.sh       # Script de build para Unix
└── README.md
```

### Convenciones de Nombrado

- **Componentes:** PascalCase (ej: `ToolCard.astro`)
- **Páginas:** kebab-case (ej: `md-to-pdf.astro`)
- **Utilities:** camelCase (ej: `firebase.ts`)
- **Estilos:** CSS-in-Astro con scope automático

---

## 🎨 Reglas de Diseño

### Sistema de Colores

#### Light Mode (Default)

```css
--background-primary: linear-gradient(180deg, #fafafa 0%, #f4f4f5 100%);
--text-primary: #18181b;
--text-secondary: #71717a;
--border-color: #e4e4e7;
--accent-primary: #8b5cf6; /* Purple */
--accent-secondary: #c084fc; /* Light Purple */
--surface: #ffffff;
--shadow: rgba(0, 0, 0, 0.08);
```

#### Dark Mode

```css
--background-primary: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
--text-primary: #f8fafc;
--text-secondary: #cbd5e1;
--border-color: #334155;
--surface: #1e293b;
--shadow: rgba(0, 0, 0, 0.3);
```

### Tipografía

- **Font Family:** 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- **Font Weights:**
  - Regular: 400 (body text)
  - Medium: 500 (labels, buttons)
  - Semibold: 600 (subtitles)
  - Bold: 700 (headings)

#### Escala Tipográfica

```css
--font-xs: 0.75rem; /* 12px */
--font-sm: 0.875rem; /* 14px */
--font-base: 1rem; /* 16px */
--font-lg: 1.125rem; /* 18px */
--font-xl: 1.25rem; /* 20px */
--font-2xl: 1.5rem; /* 24px */
--font-3xl: 1.875rem; /* 30px */
--font-4xl: 2.25rem; /* 36px */
--font-5xl: 3rem; /* 48px */
```

### Espaciado

Sistema basado en múltiplos de 4px (0.25rem):

```css
--space-xs: 0.5rem; /* 8px */
--space-sm: 0.75rem; /* 12px */
--space-md: 1rem; /* 16px */
--space-lg: 1.5rem; /* 24px */
--space-xl: 2rem; /* 32px */
--space-2xl: 3rem; /* 48px */
--space-3xl: 4rem; /* 64px */
```

### Border Radius

```css
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 20px;
--radius-full: 9999px;
```

### Sombras

```css
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.06);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 40px rgba(0, 0, 0, 0.12);
```

### Animaciones y Transiciones

#### Duración Estándar

```css
--transition-fast: 0.15s;
--transition-base: 0.3s;
--transition-slow: 0.5s;
```

#### Easing Functions

```css
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
```

#### Transiciones Comunes

```css
/* Hover states */
transition: all 0.3s ease;

/* Transform only */
transition: transform 0.3s ease;

/* Opacity fade */
transition: opacity 0.3s ease;
```

### Componentes UI Estándar

#### Botones

```css
.btn-primary {
  background: linear-gradient(135deg, #8b5cf6 0%, #c084fc 100%);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  border: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(139, 92, 246, 0.3);
}

.btn-secondary {
  background: white;
  color: #8b5cf6;
  border: 2px solid #8b5cf6;
  /* ... resto igual */
}
```

#### Cards

```css
.tool-card {
  background: white;
  border: 1px solid #e4e4e7;
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.tool-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  border-color: #c084fc;
}
```

### Iconografía

- **Librería:** SVG inline (sin dependencias externas)
- **Tamaño estándar:** 20x20px (icons), 32x32px (tool headers)
- **Stroke width:** 2px para líneas
- **Color:** currentColor (hereda del texto)

### Responsive Breakpoints

```css
/* Mobile first approach */
--breakpoint-sm: 640px; /* Tablet */
--breakpoint-md: 768px; /* Tablet landscape */
--breakpoint-lg: 1024px; /* Desktop */
--breakpoint-xl: 1280px; /* Large desktop */
```

#### Media Queries

```css
/* Mobile: default (< 640px) */

/* Tablet */
@media (min-width: 640px) {
}

/* Desktop */
@media (min-width: 1024px) {
}
```

---

## 🛠️ Buenas Prácticas de Desarrollo

### 1. Componentes Astro

#### ✅ DO: Usar props tipadas

```astro
---
interface Props {
  title: string;
  description: string;
  icon: string;
  href: string;
  tags?: string[];
  comingSoon?: boolean;
}

const { title, description, icon, href, tags = [], comingSoon = false } = Astro.props;
---
```

#### ✅ DO: Estilos scoped por defecto

```astro
<style>
  /* Estos estilos solo aplican a este componente */
  .tool-card {
    /* ... */
  }
</style>
```

#### ✅ DO: Scripts client-side con event listeners

```astro
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    button?.addEventListener('click', () => {
      // Lógica aquí
    });
  });
</script>
```

#### ❌ DON'T: Acceder a window/document en frontmatter

```astro
---
// ❌ Esto falla (se ejecuta en build time, no en browser)
const width = window.innerWidth;
---
```

### 2. Estructura de Páginas (Tools)

Cada herramienta debe seguir esta estructura:

```astro
---
import Layout from '../layouts/Layout.astro';
import ToolHeader from '../components/ToolHeader.astro';

// Definir icono SVG
const icon = `<svg>...</svg>`;
---

<Layout
  title="[Tool Name] - [Description] | WebTools Suite"
  description="[Detailed description for SEO]"
  url="https://tu-dominio.com/tool-name"
  image="/og-image-tool.jpg"
>
  <main>
    <div class="container">
      <ToolHeader
        title="Tool Name"
        subtitle="Brief description"
        icon={icon}
        showPrimaryButton={false}
      />

      <!-- Input Section -->
      <div class="input-section">
        <!-- Controles de entrada -->
      </div>

      <!-- Settings Section (opcional) -->
      <div class="settings-section">
        <!-- Configuración -->
      </div>

      <!-- Output Section -->
      <div class="output-section">
        <!-- Resultados -->
      </div>
    </div>
  </main>

  <!-- Estilos específicos de la herramienta -->
  <style>
    /* Scoped styles */
  </style>

  <!-- Lógica client-side -->
  <script>
    // Client-side logic
  </script>
</Layout>
```

### 3. Manejo de Estado

#### ✅ DO: Estado en el DOM (data attributes)

```javascript
button.dataset.state = "loading";
if (button.dataset.state === "loading") {
}
```

#### ✅ DO: Variables globales mínimas

```javascript
let currentImages = []; // OK para estado de la herramienta
```

#### ❌ DON'T: Usar frameworks de estado complejos

No usar Redux, MobX, etc. El estado debe ser simple y local.

### 4. Procesamiento de Archivos

#### ✅ DO: Validar archivos antes de procesar

```javascript
function validateFile(file) {
  const MAX_SIZE = 10 * 1024 * 1024; // 10MB
  const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

  if (file.size > MAX_SIZE) {
    throw new Error("Archivo muy grande");
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    throw new Error("Tipo de archivo no permitido");
  }

  return true;
}
```

#### ✅ DO: Mostrar progreso para operaciones largas

```javascript
async function processImages(images) {
  for (let i = 0; i < images.length; i++) {
    const progress = ((i + 1) / images.length) * 100;
    updateProgressBar(progress);
    await processImage(images[i]);
  }
}
```

#### ✅ DO: Liberar recursos después de usar

```javascript
function processImage(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      // Process...
      URL.revokeObjectURL(img.src); // ✅ Liberar memoria
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}
```

### 5. Sanitización de Inputs

#### ✅ DO: Sanitizar HTML user-generated

```javascript
import DOMPurify from "dompurify";

function renderMarkdown(markdown) {
  const html = marked(markdown);
  const clean = DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      "p",
      "strong",
      "em",
      "h1",
      "h2",
      "h3",
      "code",
      "pre",
      "ul",
      "ol",
      "li",
    ],
    ALLOWED_ATTR: ["class", "id"],
  });
  return clean;
}
```

### 6. Error Handling

#### ✅ DO: Try-catch en operaciones async

```javascript
async function generatePDF() {
  try {
    const pdf = await html2pdf().from(element).save();
    showSuccess("PDF generado correctamente");
  } catch (error) {
    console.error("Error generating PDF:", error);
    showError("No se pudo generar el PDF. Inténtalo de nuevo.");
  }
}
```

#### ✅ DO: Mostrar mensajes user-friendly

```javascript
function showError(message) {
  const toast = document.createElement("div");
  toast.className = "toast toast-error";
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 3000);
}
```

### 7. Accesibilidad

#### ✅ DO: Labels para todos los inputs

```html
<label for="quality">
  <span class="label-text">Calidad</span>
</label>
<input id="quality" type="range" aria-label="Ajustar calidad" />
```

#### ✅ DO: ARIA attributes cuando sea necesario

```html
<button aria-label="Descargar PDF" aria-describedby="download-help">
  <svg>...</svg>
</button>
<span id="download-help" class="sr-only">
  Descarga el documento en formato PDF
</span>
```

#### ✅ DO: Focus visible

```css
button:focus-visible {
  outline: 2px solid #8b5cf6;
  outline-offset: 2px;
}
```

### 8. Sistema de Favoritos

#### ✅ DO: Usar el módulo favorites.ts

```javascript
import {
  addFavorite,
  removeFavorite,
  isFavorite,
  toggleFavorite,
} from "../lib/favorites";

// Agregar una herramienta a favoritos
const tool = {
  title: "MD to PDF",
  href: "/md-to-pdf",
  icon: `<svg>...</svg>`,
};

addFavorite(tool); // Agrega y muestra toast

// Verificar si está en favoritos
if (isFavorite("/md-to-pdf")) {
  // Actualizar UI
}

// Alternar estado
toggleFavorite(tool);
```

#### ✅ DO: Limitar a 8 favoritos máximo

El sistema automáticamente limita a 8 favoritos y muestra un toast de advertencia si se intenta agregar más.

#### ✅ DO: Escuchar el evento personalizado

```javascript
window.addEventListener("favoritesChanged", (e) => {
  const { favorites } = e.detail;
  // Actualizar UI según sea necesario
});
```

#### ✅ DO: Estructura de datos en ToolCard

```astro
---
const toolData = JSON.stringify({ title, href, icon });
---

<button
  data-favorite-btn
  data-tool={toolData}
  aria-label={`Agregar ${title} a favoritos`}
>
  <!-- SVG icons -->
</button>
```

#### ❌ DON'T: Modificar directamente localStorage

Siempre usar las funciones del módulo `favorites.ts` para mantener consistencia y disparar eventos.

### 9. Dark Mode

#### ✅ DO: Usar clase global `.dark-mode`

```css
/* Light mode (default) */
.tool-card {
  background: white;
  color: #18181b;
}

/* Dark mode */
.dark-mode .tool-card {
  background: #1e293b;
  color: #f8fafc;
}
```

#### ✅ DO: Persistir preferencia en localStorage

```javascript
function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark-mode");
  }
}
```

### 10. Toast Notifications

#### ✅ DO: Usar el sistema de toasts integrado

Los toasts se generan automáticamente desde el módulo `favorites.ts`:

```javascript
// Los toasts se muestran automáticamente al usar las funciones
addFavorite(tool); // Muestra: "Agregado a favoritos" (success)
removeFavorite(href); // Muestra: "Eliminado de favoritos" (success)

// Límite alcanzado
addFavorite(tool); // Muestra: "Máximo 8 favoritos permitidos" (warning)
```

#### Tipos de Toast

- **success** - Fondo verde, icono ✓
- **warning** - Fondo amarillo, icono ⚠
- **error** - Fondo rojo, icono ✕

#### Características

- Auto-dismiss en 3 segundos
- Animación suave de entrada/salida
- Solo uno visible a la vez
- Responsive (cambia posición en móvil)
- Dark mode support

---

## ⚡ Optimización y Performance

### Build Configuration

#### Terser Optimization (astro.config.mjs)

```javascript
terserOptions: {
  compress: {
    drop_console: true,        // Eliminar console.log en prod
    drop_debugger: true,       // Eliminar debugger
    passes: 3,                 // Múltiples pasadas de minificación
    pure_funcs: ['console.log', 'console.info'],
    unsafe_arrows: true,       // Optimizar arrow functions
    unsafe_comps: true,        // Optimizar comparaciones
    unsafe_math: true,         // Optimizar operaciones matemáticas
    unsafe_methods: true       // Optimizar métodos
  },
  mangle: {
    toplevel: true             // Mangle variables top-level
  },
  format: {
    comments: false            // Sin comentarios en prod
  }
}
```

### CSS Optimization

#### ✅ DO: Inline critical CSS

```javascript
// astro.config.mjs
build: {
  inlineStylesheets: "always"; // Inline CSS crítico
}
```

#### ✅ DO: Code splitting para CSS

```javascript
vite: {
  build: {
    cssCodeSplit: true; // CSS por página
  }
}
```

### Image Optimization

#### ✅ DO: Lazy loading para imágenes

```html
<img src="..." loading="lazy" decoding="async" />
```

#### ✅ DO: Responsive images

```html
<img
  src="image-800.jpg"
  srcset="image-400.jpg 400w, image-800.jpg 800w, image-1200.jpg 1200w"
  sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
  alt="Description"
/>
```

### Font Loading

#### ✅ DO: Preload critical fonts

```html
<link
  rel="preload"
  as="style"
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap"
/>
```

#### ✅ DO: Async non-critical fonts

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
  media="print"
  onload="this.media='all'"
/>
```

### Script Loading

#### ✅ DO: Defer non-critical scripts

```html
<script src="analytics.js" defer></script>
```

#### ✅ DO: Module scripts (auto-defer)

```html
<script type="module" src="app.js"></script>
```

### Resource Hints

#### ✅ DO: Preconnect to external domains

```html
<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

### Caching Strategy

#### HTTP Headers (\_headers file)

```
/*.js
  Cache-Control: public, max-age=31536000, immutable

/*.css
  Cache-Control: public, max-age=31536000, immutable

/*.woff2
  Cache-Control: public, max-age=31536000, immutable

/*.html
  Cache-Control: public, max-age=0, must-revalidate
```

### Performance Budgets

#### Target Metrics

- **First Contentful Paint (FCP):** < 1.5s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Time to Interactive (TTI):** < 3.5s
- **Cumulative Layout Shift (CLS):** < 0.1
- **Total Blocking Time (TBT):** < 200ms

#### Bundle Size Limits

- **HTML:** < 50KB (compressed)
- **CSS:** < 50KB per page (compressed)
- **JS:** < 150KB per page (compressed)
- **Total Initial Load:** < 200KB

### Web Vitals Optimization

#### ✅ DO: Optimize LCP

- Preload hero images
- Inline critical CSS
- Remove render-blocking resources

#### ✅ DO: Minimize CLS

- Set width/height on images
- Reserve space for dynamic content
- Avoid inserting content above existing content

#### ✅ DO: Reduce FID/TBT

- Break up long tasks
- Use web workers for heavy computation
- Defer non-critical JS

---

## 🔒 Seguridad

### Content Security Policy (CSP)

#### Headers en Layout.astro

```html
<meta
  http-equiv="Content-Security-Policy"
  content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googleapis.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: blob:;
  connect-src 'self' https://firebase.googleapis.com;
"
/>
```

### Security Headers

#### En \_headers file

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

### Input Validation

#### ✅ DO: Validar en cliente Y servidor (si aplica)

```javascript
function validateInput(value) {
  // Validar tipo
  if (typeof value !== "string") return false;

  // Validar longitud
  if (value.length > 10000) return false;

  // Validar caracteres peligrosos
  const dangerousPatterns = [/<script>/i, /javascript:/i, /on\w+=/i];
  return !dangerousPatterns.some((pattern) => pattern.test(value));
}
```

### File Upload Security

#### ✅ DO: Validar tipo MIME real (no solo extensión)

```javascript
async function validateFileType(file) {
  const buffer = await file.arrayBuffer();
  const bytes = new Uint8Array(buffer.slice(0, 4));

  // Check magic numbers
  const signature = Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  const imageSignatures = {
    "89504e47": "image/png",
    ffd8ffe0: "image/jpeg",
    ffd8ffe1: "image/jpeg",
  };

  return imageSignatures[signature.slice(0, 8)] === file.type;
}
```

### XSS Prevention

#### ✅ DO: Sanitizar siempre HTML user-generated

```javascript
import DOMPurify from "dompurify";

function safeRender(html) {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ["p", "strong", "em", "h1", "h2", "h3"],
    ALLOWED_ATTR: [],
  });
}
```

#### ✅ DO: Usar textContent en lugar de innerHTML

```javascript
// ✅ Seguro
element.textContent = userInput;

// ❌ Peligroso
element.innerHTML = userInput;
```

### Dependency Security

#### ✅ DO: Auditar dependencias regularmente

```bash
npm audit
npm audit fix
```

#### ✅ DO: Usar versiones específicas (no rangos amplios)

```json
{
  "dependencies": {
    "marked": "16.4.0", // ✅ Versión exacta
    "dompurify": "^3.3.0" // ✅ Patch updates OK
  }
}
```

---

## 🔍 SEO y Accesibilidad

### Meta Tags Esenciales

#### En Layout.astro

```html
<!-- Primary Meta Tags -->
<title>{title}</title>
<meta name="title" content="{title}" />
<meta name="description" content="{description}" />
<meta name="keywords" content="..." />
<meta name="author" content="Fabricio Hernández" />
<meta name="language" content="Spanish" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="{canonicalUrl}" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="{url}" />
<meta property="og:title" content="{title}" />
<meta property="og:description" content="{description}" />
<meta property="og:image" content="{image}" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="{url}" />
<meta name="twitter:title" content="{title}" />
<meta name="twitter:description" content="{description}" />
<meta name="twitter:image" content="{image}" />
```

### Structured Data (JSON-LD)

#### Para herramientas

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "WebTools Suite",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "...",
    "featureList": ["...", "..."]
  }
</script>
```

### Sitemap.xml

#### Estructura

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://tu-dominio.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://tu-dominio.com/md-to-pdf</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- ... más URLs -->
</urlset>
```

### Robots.txt

```
User-agent: *
Allow: /

Sitemap: https://tu-dominio.com/sitemap.xml
```

### Accesibilidad (WCAG 2.1 AA)

#### ✅ Checklist

- [ ] Contraste de color mínimo 4.5:1
- [ ] Navegación por teclado completa
- [ ] Focus visible en todos los elementos interactivos
- [ ] Alt text descriptivo en todas las imágenes
- [ ] Labels en todos los form inputs
- [ ] ARIA labels cuando sea necesario
- [ ] Headings jerárquicos (h1 → h2 → h3)
- [ ] Skip links para navegación
- [ ] Zonas landmark (nav, main, footer)

#### ✅ DO: Semantic HTML

```html
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
  </ul>
</nav>

<main>
  <h1>Título Principal</h1>
  <article>...</article>
</main>

<footer>...</footer>
```

---

## 🚀 Deployment

### Build Process

#### Script de build (build-and-package.ps1)

```powershell
# Limpiar builds anteriores
Remove-Item -Recurse -Force "dist"

# Instalar dependencias
npm install

# Build production
npm run build

# Crear ZIP para deployment
Compress-Archive -Path dist/* -DestinationPath webtools-suite.zip
```

### Plataformas Recomendadas

#### 1. Netlify

**Configuración:**

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Ventajas:**

- Deploy automático desde Git
- Preview deployments
- Headers personalizados (\_headers)
- Edge functions (si se necesita)

#### 2. Vercel

**Configuración:**

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "astro"
}
```

#### 3. GitHub Pages

**Workflow (.github/workflows/deploy.yml):**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Environment Variables

#### En producción

```bash
PUBLIC_SITE_URL=https://tu-dominio.com
PUBLIC_FIREBASE_API_KEY=your_key
PUBLIC_FIREBASE_PROJECT_ID=your_project
```

### Pre-deployment Checklist

- [ ] `npm run build` exitoso sin errores
- [ ] Probar sitio en `npm run preview`
- [ ] Verificar meta tags (Open Graph, Twitter Card)
- [ ] Validar sitemap.xml actualizado
- [ ] Headers de seguridad configurados
- [ ] Analytics funcionando
- [ ] Performance: Lighthouse score > 90
- [ ] Accesibilidad: WAVE test sin errores críticos
- [ ] SEO: Verificar en Google Search Console

---

## ✅ Checklist de Nuevas Herramientas

### Antes de Implementar

#### 1. Planificación

- [ ] Definir objetivo de la herramienta
- [ ] Identificar inputs necesarios
- [ ] Diseñar flujo de usuario
- [ ] Verificar librerías necesarias (si hay, validar licencia)
- [ ] Asegurar que funciona 100% client-side

#### 2. Setup de Página

- [ ] Crear archivo en `src/pages/[tool-name].astro`
- [ ] Importar Layout y ToolHeader
- [ ] Definir meta tags (title, description, OG tags)
- [ ] Crear icono SVG único para la herramienta
- [ ] Agregar a sitemap.xml
- [ ] Agregar ToolCard en landing page (incluye botón de favorito automático)

#### 3. Estructura HTML

- [ ] Contenedor principal con clase `.container`
- [ ] ToolHeader con título, subtítulo e icono
- [ ] Sección de input (.input-section)
- [ ] Sección de configuración (.settings-section) - opcional
- [ ] Sección de output (.output-section)
- [ ] Mensajes de estado (loading, error, success)

#### 4. Estilos

- [ ] Seguir sistema de colores del proyecto
- [ ] Responsive design (mobile first)
- [ ] Dark mode support
- [ ] Animaciones suaves (transition: all 0.3s ease)
- [ ] Estados hover, focus, active en botones
- [ ] Indicadores de carga visuales

#### 5. JavaScript

- [ ] Event listeners en DOMContentLoaded
- [ ] Validación de inputs
- [ ] Manejo de errores con try-catch
- [ ] Mostrar feedback al usuario (toasts/alerts)
- [ ] Liberar recursos (URLs, event listeners)
- [ ] Sanitizar outputs si contienen HTML

#### 6. Accesibilidad

- [ ] Labels en todos los inputs
- [ ] ARIA labels en iconos/botones
- [ ] Navegación por teclado funcional
- [ ] Focus visible
- [ ] Mensajes de error accesibles

#### 7. SEO

- [ ] Meta tags completos
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] Structured data (JSON-LD)
- [ ] Canonical URL
- [ ] Alt text en imágenes

#### 8. Testing

- [ ] Funcionalidad en Chrome, Firefox, Safari
- [ ] Responsive en móvil, tablet, desktop
- [ ] Dark mode funcional
- [ ] Performance (Lighthouse > 90)
- [ ] Accesibilidad (WAVE test)
- [ ] Validar inputs edge cases
- [ ] Probar con archivos grandes (si aplica)

#### 9. Documentación

- [ ] Agregar ToolCard en landing page
- [ ] Actualizar README.md
- [ ] Comentarios en código complejo
- [ ] Documentar limitaciones (ej: "máximo 5 imágenes")

#### 10. Deployment

- [ ] Build exitoso (`npm run build`)
- [ ] Preview local (`npm run preview`)
- [ ] Verificar en staging
- [ ] Deploy a producción
- [ ] Verificar Analytics tracking

---

## 📊 Monitoreo y Analytics

### Firebase Analytics

#### Eventos a Trackear

```javascript
// Page views
trackPageView(pageName);

// Tool usage
logEvent("tool_used", {
  tool_name: "md-to-pdf",
  action: "generate_pdf",
});

// Errors
logEvent("error_occurred", {
  tool_name: "image-optimizer",
  error_message: "File too large",
});

// Feature usage
logEvent("feature_used", {
  feature: "dark_mode",
  value: "enabled",
});
```

### Remote Config

#### Feature Flags

```javascript
// Mantenimiento
const isMaintenanceMode = getConfigValue("maintenance_mode");
const maintenanceMessage = getConfigValue("maintenance_message");

// A/B Testing
const newFeatureEnabled = getConfigValue("enable_new_feature");
```

### Performance Monitoring

#### Herramientas Recomendadas

- **Lighthouse CI** - Auditorías automáticas en cada deploy
- **WebPageTest** - Testing desde múltiples ubicaciones
- **Chrome DevTools** - Performance profiling local

---

## 🔄 Mantenimiento

### Actualizaciones de Dependencias

#### Cada mes

```bash
npm outdated
npm update
npm audit
npm test  # Si hay tests
npm run build  # Verificar que sigue funcionando
```

### Backups

#### Repositorio

- Git en GitHub (fuente de verdad)
- Tags en releases importantes
- Branches por feature

#### Assets

- Imágenes originales en carpeta separada
- OG images con PSD/Figma source

### Logs y Debugging

#### Producción

```javascript
// NO usar console.log (se elimina en build)

// Usar Firebase Analytics para errors
logEvent("error", {
  tool: "md-to-pdf",
  message: error.message,
  stack: error.stack,
});
```

#### Desarrollo

```javascript
// console.log OK en development
if (import.meta.env.DEV) {
  console.log("Debug info:", data);
}
```

---

## 📚 Referencias

### Documentación Oficial

- [Astro Docs](https://docs.astro.build/)
- [Vite Docs](https://vitejs.dev/)
- [Firebase Docs](https://firebase.google.com/docs)

### Herramientas de Testing

- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WAVE Accessibility](https://wave.webaim.org/)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

### Recursos de Diseño

- [Inter Font](https://rsms.me/inter/)
- [SVG Icons](https://heroicons.com/)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

## 📝 Changelog Template

Al agregar nuevas features:

```markdown
## [Version] - YYYY-MM-DD

### Added

- Nueva herramienta: [Tool Name]
- Feature: [Description]

### Changed

- Mejorado: [Description]
- Actualizado: [Dependency] to v[X.X.X]

### Fixed

- Bug: [Description]
- Corregido: [Description]

### Security

- Actualizado: [Security patch]
```

---

## 🤝 Contribución

### Para Nuevos Desarrolladores

1. **Fork el repositorio**
2. **Crear branch:** `git checkout -b feature/nueva-herramienta`
3. **Seguir este documento** de arquitectura
4. **Commit:** `git commit -m 'Add: Nueva herramienta XYZ'`
5. **Push:** `git push origin feature/nueva-herramienta`
6. **Pull Request** con descripción detallada

### Code Review Checklist

- [ ] Sigue las convenciones de código
- [ ] Tiene tests (si aplica)
- [ ] Documentación actualizada
- [ ] No rompe builds existentes
- [ ] Performance optimizada
- [ ] Accesibilidad validada

---

**Última actualización:** Octubre 2024  
**Mantenedor:** Fabricio Hernández  
**Versión del documento:** 1.0.0

---

_Este documento debe actualizarse con cada cambio arquitectónico significativo._
