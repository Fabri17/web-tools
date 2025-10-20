# 📄 MD to PDF - Conversor de Markdown a PDF# 📄 MD to PDF - Conversor de Markdown a PDF# Astro Starter Kit: Basics



Una aplicación web moderna y elegante para convertir documentos Markdown a PDF profesionales con un diseño limpio y fácil de usar.



## ✨ CaracterísticasUna aplicación web moderna y elegante para convertir documentos Markdown a PDF profesionales con un diseño limpio y fácil de usar.```sh



- 📝 **Editor en tiempo real** - Escribe Markdown y ve los cambios instantáneamentenpm create astro@latest -- --template basics

- 🎨 **Vista previa en vivo** - Visualiza cómo se verá tu documento antes de exportar

- 📱 **Diseño responsive** - Funciona perfectamente en desktop, tablet y móvil## ✨ Características```

- 🎯 **PDFs de alta calidad** - Genera PDFs profesionales con estilos preservados

- ⚡ **Rápido y eficiente** - Conversión instantánea sin necesidad de backend

- 🌈 **Interfaz moderna** - Diseño limpio con animaciones suaves

- 💾 **Nombres inteligentes** - Los archivos PDF se nombran automáticamente según el contenido- 📝 **Editor en tiempo real** - Escribe Markdown y ve los cambios instantáneamente> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

- ⌨️ **Atajos de teclado** - Ctrl+S para convertir, Ctrl+K para limpiar

- 🔒 **Seguro** - Todo el procesamiento se hace localmente en tu navegador- 🎨 **Vista previa en vivo** - Visualiza cómo se verá tu documento antes de exportar



## 🚀 Tecnologías- 📱 **Diseño responsive** - Funciona perfectamente en desktop, tablet y móvil## 🚀 Project Structure



- **Astro** - Framework web moderno y rápido- 🎯 **PDFs de alta calidad** - Genera PDFs profesionales con estilos preservados

- **TypeScript** - Tipado estático para mejor desarrollo

- **Marked.js** - Parser de Markdown rápido y confiable- ⚡ **Rápido y eficiente** - Conversión instantánea sin necesidad de backendInside of your Astro project, you'll see the following folders and files:

- **html2pdf.js** - Generación de PDFs de alta calidad con estilos CSS

- **CSS moderno** - Animaciones y gradientes para una UI atractiva- 🌈 **Interfaz moderna** - Diseño limpio con animaciones suaves



## 🛠️ Instalación- 💾 **Nombres inteligentes** - Los archivos PDF se nombran automáticamente según el contenido```text



```sh- ⌨️ **Atajos de teclado** - Ctrl+S para convertir, Ctrl+K para limpiar/

npm install

```├── public/



## 🧞 Comandos## 🚀 Tecnologías│   └── favicon.svg



Todos los comandos se ejecutan desde la raíz del proyecto en una terminal:├── src



| Comando                   | Acción                                           |- **Astro** - Framework web moderno│   ├── assets

| :------------------------ | :----------------------------------------------- |

| `npm install`             | Instala las dependencias                         |- **TypeScript** - Tipado estático para mejor desarrollo│   │   └── astro.svg

| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321` |

| `npm run build`           | Construye el sitio de producción en `./dist/`    |- **Marked.js** - Parser de Markdown rápido y confiable│   ├── components

| `npm run preview`         | Vista previa local del build antes de desplegar  |

- **html2pdf.js** - Generación de PDFs de alta calidad con estilos CSS│   │   └── Welcome.astro

## 📖 Uso

- **CSS moderno** - Animaciones y gradientes para una UI atractiva│   ├── layouts

1. Ejecuta `npm run dev` para iniciar el servidor de desarrollo

2. Abre tu navegador en `http://localhost:4321`│   │   └── Layout.astro

3. Escribe o pega tu contenido Markdown en el editor izquierdo

4. Ve la vista previa en tiempo real en el panel derecho## 🛠️ Instalación│   └── pages

5. Haz clic en "Generar PDF" para descargar tu documento

│       └── index.astro

## 🎨 Características de Markdown Soportadas

```sh└── package.json

- ✅ Encabezados (H1-H6)

- ✅ Párrafos y saltos de líneanpm install```

- ✅ **Negrita** y *cursiva*

- ✅ Listas numeradas y con viñetas```

- ✅ Listas de tareas con checkboxes

- ✅ Bloques de código con syntax highlightingTo learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

- ✅ Código inline

- ✅ Blockquotes (citas)## 🧞 Comandos

- ✅ Enlaces

- ✅ Tablas## 🧞 Commands

- ✅ Líneas horizontales

- ✅ ImágenesTodos los comandos se ejecutan desde la raíz del proyecto en una terminal:



## 🔒 SeguridadAll commands are run from the root of the project, from a terminal:



Esta aplicación está diseñada con la seguridad en mente:| Comando                   | Acción                                           |



- **Procesamiento local**: Todo el procesamiento se realiza en el navegador del usuario| :------------------------ | :----------------------------------------------- || Command                   | Action                                           |

- **Sin backend**: No se envían datos a servidores externos

- **Sanitización de HTML**: Prevención de ataques XSS| `npm install`             | Instala las dependencias                         || :------------------------ | :----------------------------------------------- |

- **Sin almacenamiento**: No se guardan datos del usuario

- **HTTPS recomendado**: Para despliegue en producción| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321` || `npm install`             | Installs dependencies                            |



## ⚡ Optimizaciones| `npm run build`           | Construye el sitio de producción en `./dist/`    || `npm run dev`             | Starts local dev server at `localhost:4321`      |



- **Carga diferida de fuentes**: Google Fonts con `display=swap`| `npm run preview`         | Vista previa local del build antes de desplegar  || `npm run build`           | Build your production site to `./dist/`          |

- **Debouncing**: Para actualizaciones eficientes de la vista previa

- **Compresión de PDF**: Los archivos PDF están optimizados| `npm run preview`         | Preview your build locally, before deploying     |

- **CSS moderno**: Uso de variables CSS y selectores eficientes

- **Sin dependencias innecesarias**: Paquete ligero y rápido## 📖 Uso| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |



## 📝 Ejemplo de Uso| `npm run astro -- --help` | Get help using the Astro CLI                     |



```markdown1. Ejecuta `npm run dev` para iniciar el servidor de desarrollo

# Mi Documento

2. Abre tu navegador en `http://localhost:4321`## 👀 Want to learn more?

Este es un ejemplo de **documento Markdown** que se puede convertir a PDF.

3. Escribe o pega tu contenido Markdown en el editor izquierdo

## Características

4. Ve la vista previa en tiempo real en el panel derechoFeel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

- Fácil de usar

- Rápido5. Haz clic en "Generar PDF" para descargar tu documento

- Profesional

## 🎨 Características de Markdown Soportadas

> **Nota**: Los PDFs generados mantienen todo el formato y estilo.

```- ✅ Encabezados (H1-H6)

- ✅ Párrafos y saltos de línea

## 🔧 Desarrollo- ✅ **Negrita** y *cursiva*

- ✅ Listas numeradas y con viñetas

El proyecto está construido con Astro y sigue una estructura simple:- ✅ Listas de tareas con checkboxes

- ✅ Bloques de código con syntax highlighting

```- ✅ Código inline

src/- ✅ Blockquotes (citas)

├── layouts/- ✅ Enlaces

│   └── Layout.astro       # Layout principal- ✅ Tablas

├── pages/- ✅ Líneas horizontales

│   └── index.astro        # Página principal con toda la lógica- ✅ Imágenes

└── components/            # Componentes reutilizables (opcional)

```## 🎯 Mejoras Implementadas



## 📄 Licencia### Conversión a PDF de Alta Calidad



MIT- **Estilos preservados**: Los estilos CSS se aplican inline para garantizar que se vean en el PDF

- **Tipografía profesional**: Fuentes y tamaños optimizados para lectura

## 🤝 Contribuciones- **Paginación inteligente**: Evita cortes en encabezados, código y tablas

- **Formato A4 estándar**: PDFs con dimensiones profesionales

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para sugerencias o mejoras.- **Alta resolución**: Escala 2x para textos e imágenes nítidas



---### Interfaz de Usuario



Hecho con ❤️ usando Astro- Animaciones suaves y transiciones elegantes

- Indicadores de estado en tiempo real
- Notificaciones informativas durante la conversión
- Contador de palabras y caracteres
- Diseño con gradientes y efectos visuales modernos

## 📝 Ejemplo de Uso

```markdown
# Mi Documento

Este es un ejemplo de **documento Markdown** que se puede convertir a PDF.

## Características

- Fácil de usar
- Rápido
- Profesional

> **Nota**: Los PDFs generados mantienen todo el formato y estilo.
```

## 🔧 Desarrollo

El proyecto está construido con Astro y sigue una estructura simple:

```
src/
├── layouts/
│   └── Layout.astro       # Layout principal
├── pages/
│   └── index.astro        # Página principal con toda la lógica
└── components/            # Componentes reutilizables (opcional)
```

## 📄 Licencia

MIT

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para sugerencias o mejoras.

---

Hecho con ❤️ usando Astro
