# 🎨 WebTools Suite - Brand Guidelines

## Guía de Marca y Estilo Visual

> **"Hecho por devs, para devs. Sin rastreadores y sin complicaciones."**

---

## 📐 Identidad de Marca

### Concepto

WebTools Suite es una **herramienta esencial para desarrolladores modernos**. Nuestra identidad visual refleja profesionalismo técnico, confiabilidad y simplicidad.

### Valores de Marca

- ⚡ **Rapidez**: Todo procesado localmente, sin esperas
- 🔒 **Privacidad**: Cero rastreadores, cero datos recolectados
- 🎯 **Simplicidad**: Sin configuración, sin complicaciones
- 🛠️ **Profesionalismo**: Herramientas de calidad, hechas por desarrolladores

---

## 🎨 Paleta de Colores

### Colores Primarios

#### Indigo/Purple (Índigo/Púrpura)

```css
--color-primary: #6366f1; /* Principal */
--color-primary-hover: #4f46e5; /* Hover */
--color-primary-light: #818cf8; /* Ligero */
--color-primary-dark: #4338ca; /* Oscuro */
```

**Uso**: Botones principales, enlaces, CTAs, elementos interactivos

#### Purple Violet (Violeta Púrpura)

```css
--color-secondary: #a855f7; /* Secundario */
--color-secondary-hover: #9333ea; /* Hover */
```

**Uso**: Acentos secundarios, badges, highlights

#### Purple Accent (Acento Púrpura)

```css
--color-accent: #8b5cf6; /* Acento */
--color-accent-hover: #7c3aed; /* Hover */
```

**Uso**: Success states, badges "free", highlights positivos

---

### Colores Neutros (Technical Black & White)

#### Blacks & Grays

```css
--color-black: #0a0a0a; /* Negro puro técnico */
--color-gray-900: #121212; /* Backgrounds dark */
--color-gray-800: #1e1e1e; /* Cards dark */
--color-gray-700: #2a2a2a; /* Borders dark */
--color-gray-600: #3d3d3d;
--color-gray-500: #6b6b6b;
--color-gray-400: #9b9b9b; /* Text secondary */
--color-gray-300: #c4c4c4;
--color-gray-200: #e0e0e0; /* Borders light */
--color-gray-100: #f5f5f5; /* Backgrounds light */
--color-white: #ffffff; /* Blanco puro */
```

---

### Colores Semánticos

```css
--color-success: #10b981; /* Verde éxito */
--color-warning: #f59e0b; /* Amarillo advertencia */
--color-error: #ef4444; /* Rojo error */
--color-info: #3b82f6; /* Azul información */
```

---

## 🔤 Tipografía

### Fonts Stack

#### Sans-serif (UI, Textos)

```css
--font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
```

**Inter** - Tipografía principal para toda la interfaz

- **Weights**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- **Uso**: Headers, body text, botones, navegación
- **Características**: Legible, moderna, optimizada para pantallas

#### Monospace (Código, Técnico)

```css
--font-mono: "JetBrains Mono", "Fira Code", "Courier New", monospace;
```

**JetBrains Mono** - Tipografía monospace para elementos técnicos

- **Weights**: 400 (Regular), 500 (Medium), 600 (Semibold)
- **Uso**: Código, nombres de archivo, datos técnicos, inputs
- **Características**: Diseñada para programación, ligatures opcionales

---

### Escala Tipográfica (Fluid)

```css
--text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem); /* 12-14px */
--text-sm: clamp(0.875rem, 0.825rem + 0.25vw, 1rem); /* 14-16px */
--text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem); /* 16-18px */
--text-lg: clamp(1.125rem, 1.05rem + 0.375vw, 1.25rem); /* 18-20px */
--text-xl: clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem); /* 20-24px */
--text-2xl: clamp(1.5rem, 1.35rem + 0.75vw, 1.875rem); /* 24-30px */
--text-3xl: clamp(1.875rem, 1.65rem + 1.125vw, 2.25rem); /* 30-36px */
--text-4xl: clamp(2.25rem, 1.95rem + 1.5vw, 3rem); /* 36-48px */
--text-5xl: clamp(3rem, 2.5rem + 2.5vw, 4rem); /* 48-64px */
```

---

### Line Heights

```css
--leading-none: 1; /* Títulos muy grandes */
--leading-tight: 1.25; /* Headlines */
--leading-snug: 1.375; /* Subtítulos */
--leading-normal: 1.5; /* Body text (default) */
--leading-relaxed: 1.625; /* Texto largo */
--leading-loose: 2; /* Espaciado amplio */
```

---

## 🎯 Logotipo

### Concepto

El logotipo debe ser **minimalista y técnico**, reflejando la naturaleza de herramientas para desarrolladores.

### Propuesta de Diseño

#### Opción 1: Monograma Técnico

```
╔═══╗
║ W ║  WebTools Suite
╚═══╝
```

- Letra "W" en fuente monospace
- Contenedor con bordes técnicos/código
- Color: Indigo (#6366f1) sobre fondo oscuro/claro

#### Opción 2: Ícono Toolbox

```
┌─────┐
│ ⚡🛠️ │  WebTools Suite
└─────┘
```

- Caja de herramientas estilizada
- Rayo eléctrico representando velocidad
- Estilo flat, minimalista

#### Opción 3: Terminal Style

```
$ webtools_
  Suite
```

- Estilo terminal/CLI
- Cursor parpadeante (animado)
- Tipografía JetBrains Mono

---

### Especificaciones Técnicas

#### Tamaños

- **Mínimo**: 32x32px (favicon)
- **Pequeño**: 64x64px (iconos móvil)
- **Mediano**: 180x180px (apple-touch-icon)
- **Grande**: 512x512px (og-image, PWA)

#### Formatos

- **SVG**: Versión principal (escalable)
- **PNG**: Versión bitmap (transparente)
- **ICO**: Favicon multitamaño

#### Área de Seguridad

- Mínimo 10% de padding alrededor del logo
- No colocar texto a menos de 20px del logo

---

## 🌈 Gradientes

### Gradientes de Marca

#### Hero Gradient (Light Mode)

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Índigo suave → Púrpura profundo

#### Hero Gradient (Dark Mode)

```css
background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
```

Negro azulado → Azul marino oscuro

#### Text Gradient (Accent)

```css
background: linear-gradient(90deg, #fbbf24, #f59e0b);
```

Dorado → Naranja (para destacar texto importante)

---

## 📏 Espaciado

```css
--space-xs: 0.25rem; /* 4px */
--space-sm: 0.5rem; /* 8px */
--space-md: 1rem; /* 16px */
--space-lg: 1.5rem; /* 24px */
--space-xl: 2rem; /* 32px */
--space-2xl: 3rem; /* 48px */
--space-3xl: 4rem; /* 64px */
--space-4xl: 6rem; /* 96px */
```

**Uso**: Usar escala consistente. Preferir múltiplos de 4px.

---

## 🔲 Bordes y Radios

```css
--radius-sm: 0.375rem; /* 6px - Badges, tags */
--radius-md: 0.5rem; /* 8px - Botones */
--radius-lg: 0.75rem; /* 12px - Cards */
--radius-xl: 1rem; /* 16px - Modales */
--radius-2xl: 1.5rem; /* 24px - Heros */
--radius-full: 9999px; /* Pills, círculos */
```

---

## 🌑 Sombras

### Light Mode

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
```

### Dark Mode

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.3);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.4);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.5);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.6);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.7);
```

---

## ✨ Animaciones

### Transiciones

```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1); /* Hover rápido */
--transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1); /* Default */
--transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1); /* Modales, slides */
```

### Principios

- **Hover effects**: Usar `transform: translateY(-2px)` + shadow
- **Active states**: Ligera reducción de escala (`scale(0.98)`)
- **Loading**: Spinner o skeleton screens
- **Page transitions**: Fade suave (200-300ms)

---

## 💬 Tono de Comunicación

### Voz de Marca

**"Hecho por devs, para devs"**

#### Características

- ✅ **Profesional pero cercano**
- ✅ **Técnico pero accesible**
- ✅ **Directo y honesto**
- ✅ **Sin marketing vacío**

#### Evitar

- ❌ Lenguaje corporativo genérico
- ❌ Promesas exageradas
- ❌ Jerga innecesaria
- ❌ Tono condescendiente

---

### Ejemplos de Mensajes

#### ✅ Correcto

- "Sin rastreadores y sin complicaciones"
- "Todo se procesa localmente en tu navegador"
- "Cero configuración, cero complicaciones"
- "Gratis para siempre. Sin trucos."

#### ❌ Incorrecto

- "¡La mejor suite de herramientas del mundo!"
- "Revolucionamos la forma de trabajar"
- "Increíble, asombroso, espectacular"
- "Únete a miles de usuarios felices"

---

## 🌍 SEO y Metadatos

### Title Pattern

```
[Tool Name] - WebTools Suite
```

Ejemplo: `Markdown to PDF Converter - WebTools Suite`

### Description Pattern (ES)

```
[Descripción de la herramienta]. Hecho por devs, para devs.
100% local, sin rastreadores. Gratis.
```

### Description Pattern (EN)

```
[Tool description]. Built by devs, for devs.
100% local, no trackers. Free.
```

### Keywords Pattern

```
developer tools, [tool-specific], online, free, privacy, local processing
```

---

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile First */
@media (min-width: 640px) {
  /* sm */
}
@media (min-width: 768px) {
  /* md */
}
@media (min-width: 1024px) {
  /* lg */
}
@media (min-width: 1280px) {
  /* xl */
}
@media (min-width: 1536px) {
  /* 2xl */
}
```

### Principios

- Mobile-first approach
- Touch targets mínimo 44x44px
- Legibilidad en todas las pantallas
- Optimizar performance en móviles

---

## ✅ Checklist de Implementación

### Diseño Visual

- [x] Sistema de variables CSS implementado
- [x] Paleta de colores definida
- [x] Tipografía técnica (Inter + JetBrains Mono)
- [ ] Logotipo diseñado y exportado
- [ ] Favicon en múltiples tamaños
- [ ] OG images personalizadas

### Contenido

- [x] Tagline principal actualizado
- [x] Tono de comunicación definido
- [x] Sistema de traducciones (ES/EN)
- [ ] Textos revisados en todas las páginas
- [ ] SEO meta tags optimizados

### Internacionalización

- [x] Sistema i18n implementado
- [x] Rutas /en/\* configuradas
- [ ] Páginas duplicadas en inglés
- [ ] Selector de idioma en UI
- [ ] Hreflang tags configurados

---

## 📚 Recursos

### Fonts

- [Inter](https://fonts.google.com/specimen/Inter) - Google Fonts
- [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) - Google Fonts

### Herramientas de Diseño

- Figma / Sketch para mockups
- ColorSpace para paletas
- Coolors.co para generación de colores
- Realfavicongenerator.net para favicons

### Referencias

- GitHub UI (tono técnico)
- Vercel (simplicidad)
- Linear (minimalismo)
- Stripe (profesionalismo)

---

## 📄 Licencia

Este documento es parte del proyecto WebTools Suite y está bajo licencia MIT.

**Fabricio Hernández** - 2025
