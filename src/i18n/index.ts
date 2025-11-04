/**
 * WebTools Suite - Internationalization System
 * Hecho por devs, para devs
 */

export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'es';

/**
 * Get the language from the URL path
 * @param pathname - The URL pathname
 * @returns The detected language
 */
export function getLangFromUrl(pathname: string): Language {
  const [, lang] = pathname.split('/');
  if (lang && lang in languages) {
    return lang as Language;
  }
  return defaultLang;
}

/**
 * Use translation strings based on the current language
 * @param lang - Current language
 * @returns Translation object
 */
export function useTranslations(lang: Language = defaultLang) {
  return function t(key: keyof typeof translations.es): string {
    return translations[lang][key] || translations[defaultLang][key];
  };
}

/**
 * Translation strings for all supported languages
 */
export const translations = {
  es: {
    // Global
    'site.title': 'WebTools Suite - Tu caja de herramientas de desarrollo',
    'site.description': 'Hecho por devs, para devs. Sin rastreadores y sin complicaciones.',
    'site.tagline': 'Tu caja de herramientas de desarrollo, sin rastreadores y sin complicaciones',
    
    // Navigation
    'nav.home': 'Inicio',
    'nav.tools': 'Herramientas',
    'nav.about': 'Acerca de',
    'nav.support': 'Apóyanos',
    
    // Hero
    'hero.title': 'Tu caja de herramientas de desarrollo,',
    'hero.titleHighlight': 'sin rastreadores y sin complicaciones',
    'hero.subtitle': 'Hecho por devs, para devs. Genera UUIDs, optimiza imágenes, analiza complejidad Big O, formatea JSON, crea contraseñas seguras y más. Todo procesado localmente en tu navegador. Cero configuración, cero complicaciones.',
    'hero.cta.primary': 'Explorar herramientas',
    'hero.cta.secondary': 'Ver todas las herramientas',
    'hero.badge': 'Gratis para siempre',
    'hero.stats.tools': 'Herramientas activas',
    'hero.stats.free': 'Gratis',
    'hero.stats.privacy': 'Datos recopilados',
    
    // Features
    'features.title': 'Herramientas Disponibles',
    'features.subtitle': 'Todo lo que necesitas para tu flujo de trabajo de desarrollo',
    'features.comingSoon': 'Próximamente',
    'features.active': 'Activa',
    
    // About
    'about.title': 'Hecho por desarrolladores, para desarrolladores',
    'about.subtitle': '100% procesamiento local. Sin registro, sin rastreadores, sin complicaciones.',
    'about.privacy.title': 'Privacidad Total',
    'about.privacy.description': 'Todo se procesa localmente en tu navegador. Cero datos enviados a servidores.',
    'about.free.title': 'Gratis para Siempre',
    'about.free.description': 'Sin planes premium, sin límites artificiales. Solo herramientas útiles.',
    'about.opensource.title': 'Código Abierto',
    'about.opensource.description': 'Transparencia total. Audita el código, contribuye o forkea el proyecto.',
    
    // Footer
    'footer.description': 'Suite de herramientas web para desarrolladores modernos',
    'footer.madeBy': 'Hecho con',
    'footer.and': 'y',
    'footer.by': 'por',
    'footer.allRights': 'Todos los derechos reservados',
    
    // Tools Common
    'tools.common.back': 'Volver al inicio',
    'tools.common.clear': 'Limpiar',
    'tools.common.loadExample': 'Cargar Ejemplo',
    'tools.common.download': 'Descargar',
    'tools.common.generate': 'Generar',
    'tools.common.copy': 'Copiar',
    'tools.common.copied': '¡Copiado!',
    'tools.common.preview': 'Vista Previa',
    'tools.common.editor': 'Editor',
    
    // Tools
    'tools.markdown.title': 'MD to PDF',
    'tools.markdown.description': 'Convierte documentos Markdown a PDF de forma instantánea. Editor en tiempo real con vista previa, perfecto para crear documentación profesional.',
    'tools.markdown.editor': 'Editor de Markdown',
    'tools.markdown.downloadPDF': 'Descargar PDF',
    
    'tools.images.title': 'Image Optimizer',
    'tools.images.description': 'Optimiza y comprime imágenes sin perder calidad. Soporte para JPEG, PNG, WebP y más formatos.',
    
    'tools.fakeData.title': 'Fake Data Generator',
    'tools.fakeData.description': 'Genera datos de prueba realistas: nombres, emails, direcciones, tarjetas de crédito, JSON, etc.',
    
    // New Tools - High Value
    'tools.bigO.title': 'Big O Visualizer',
    'tools.bigO.description': 'Visualiza y compara complejidades algorítmicas. Gráficas interactivas de O(1), O(log n), O(n), O(n²)... ¡Entiende por qué tu código es lento!',
    
    'tools.gitSimulator.title': 'Git Flow Simulator',
    'tools.gitSimulator.description': 'Practica Git sin miedo. Simula branches, merges, rebases en un entorno seguro. Visualiza el árbol y deshaz errores infinitamente.',
    
    'tools.sqlExplainer.title': 'SQL Query Explainer',
    'tools.sqlExplainer.description': 'Pega tu query SQL y obtén explicación detallada. Visualiza JOINs, entiende subqueries. Ideal para aprender SQL o debugging.',
    
    'tools.jsonFormatter.title': 'JSON Formatter & TypeScript Generator',
    'tools.jsonFormatter.description': 'Formatea y valida JSON. Genera automáticamente interfaces TypeScript desde cualquier JSON. Colapsa secciones y detecta errores.',
    
    'tools.commitGenerator.title': 'Commit Message Generator',
    'tools.commitGenerator.description': 'Genera mensajes de commit perfectos siguiendo Conventional Commits. feat, fix, docs, style... Sin excusas para commits de \'asdf\' o \'test\'.',
    
    'tools.dependencyAnalyzer.title': 'Dependency Analyzer',
    'tools.dependencyAnalyzer.description': 'Analiza tu package.json. Detecta dependencias circulares, versiones conflictivas, vulnerabilidades y paquetes obsoletos.',
    
    'tools.codeReviewChecklist.title': 'Code Review Checklist Generator',
    'tools.codeReviewChecklist.description': 'Genera checklists personalizados para code reviews según tu stack. TypeScript, React, Node... Nunca más olvides revisar seguridad o performance.',
    
    'tools.readmeGenerator.title': 'README.md Template Generator',
    'tools.readmeGenerator.description': 'Genera READMEs profesionales con badges, secciones, TOC automático. Incluye templates para OSS, proyectos personales y empresariales.',
    
    // Common
    'common.loading': 'Cargando...',
    'common.error': 'Error',
    'common.success': 'Éxito',
    'common.copy': 'Copiar',
    'common.copied': 'Copiado',
    'common.download': 'Descargar',
    'common.clear': 'Limpiar',
    'common.reset': 'Restablecer',
  },
  en: {
    // Global
    'site.title': 'WebTools Suite - Your Developer Toolbox',
    'site.description': 'Built by devs, for devs. No trackers, no hassle.',
    'site.tagline': 'Your developer toolbox, no trackers and no hassle',
    
    // Navigation
    'nav.home': 'Home',
    'nav.tools': 'Tools',
    'nav.about': 'About',
    'nav.support': 'Support Us',
    
    // Hero
    'hero.title': 'Your developer toolbox,',
    'hero.titleHighlight': 'no trackers and no hassle',
    'hero.subtitle': 'Built by devs, for devs. Generate UUIDs, optimize images, analyze Big O complexity, format JSON, create secure passwords and more. Everything processed locally in your browser. Zero config, zero hassle.',
    'hero.cta.primary': 'Explore tools',
    'hero.cta.secondary': 'View all tools',
    'hero.badge': 'Free forever',
    'hero.stats.tools': 'Active tools',
    'hero.stats.free': 'Free',
    'hero.stats.privacy': 'Data collected',
    
    // Features
    'features.title': 'Available Tools',
    'features.subtitle': 'Everything you need for your development workflow',
    'features.comingSoon': 'Coming Soon',
    'features.active': 'Active',
    
    // About
    'about.title': 'Built by developers, for developers',
    'about.subtitle': '100% local processing. No signup, no trackers, no hassle.',
    'about.privacy.title': 'Total Privacy',
    'about.privacy.description': 'Everything processed locally in your browser. Zero data sent to servers.',
    'about.free.title': 'Free Forever',
    'about.free.description': 'No premium plans, no artificial limits. Just useful tools.',
    'about.opensource.title': 'Open Source',
    'about.opensource.description': 'Full transparency. Audit the code, contribute or fork the project.',
    
    // Footer
    'footer.description': 'Web tools suite for modern developers',
    'footer.madeBy': 'Made with',
    'footer.and': 'and',
    'footer.by': 'by',
    'footer.allRights': 'All rights reserved',
    
    // Tools Common
    'tools.common.back': 'Back to home',
    'tools.common.clear': 'Clear',
    'tools.common.loadExample': 'Load Example',
    'tools.common.download': 'Download',
    'tools.common.generate': 'Generate',
    'tools.common.copy': 'Copy',
    'tools.common.copied': 'Copied!',
    'tools.common.preview': 'Preview',
    'tools.common.editor': 'Editor',
    
    // Tools
    'tools.markdown.title': 'MD to PDF',
    'tools.markdown.description': 'Convert Markdown documents to PDF instantly. Real-time editor with preview, perfect for creating professional documentation.',
    'tools.markdown.editor': 'Markdown Editor',
    'tools.markdown.downloadPDF': 'Download PDF',
    
    'tools.images.title': 'Image Optimizer',
    'tools.images.description': 'Optimize and compress images without quality loss. Support for JPEG, PNG, WebP and more formats.',
    
    'tools.fakeData.title': 'Fake Data Generator',
    'tools.fakeData.description': 'Generate realistic test data: names, emails, addresses, credit cards, JSON, etc.',
    
    // New Tools - High Value
    'tools.bigO.title': 'Big O Visualizer',
    'tools.bigO.description': 'Visualize and compare algorithmic complexities. Interactive graphs of O(1), O(log n), O(n), O(n²)... Understand why your code is slow!',
    
    'tools.gitSimulator.title': 'Git Flow Simulator',
    'tools.gitSimulator.description': 'Practice Git fearlessly. Simulate branches, merges, rebases in a safe environment. Visualize the tree and undo mistakes infinitely.',
    
    'tools.sqlExplainer.title': 'SQL Query Explainer',
    'tools.sqlExplainer.description': 'Paste your SQL query and get detailed explanation. Visualize JOINs, understand subqueries. Great for learning SQL or debugging.',
    
    'tools.jsonFormatter.title': 'JSON Formatter & TypeScript Generator',
    'tools.jsonFormatter.description': 'Format and validate JSON. Automatically generate TypeScript interfaces from any JSON. Collapse sections and detect errors.',
    
    'tools.commitGenerator.title': 'Commit Message Generator',
    'tools.commitGenerator.description': 'Generate perfect commit messages following Conventional Commits. feat, fix, docs, style... No more excuses for \'asdf\' or \'test\' commits.',
    
    'tools.dependencyAnalyzer.title': 'Dependency Analyzer',
    'tools.dependencyAnalyzer.description': 'Analyze your package.json. Detect circular dependencies, conflicting versions, vulnerabilities and outdated packages.',
    
    'tools.codeReviewChecklist.title': 'Code Review Checklist Generator',
    'tools.codeReviewChecklist.description': 'Generate custom checklists for code reviews based on your stack. TypeScript, React, Node... Never forget to check security or performance again.',
    
    'tools.readmeGenerator.title': 'README.md Template Generator',
    'tools.readmeGenerator.description': 'Generate professional READMEs with badges, sections, automatic TOC. Includes templates for OSS, personal and enterprise projects.',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.copy': 'Copy',
    'common.copied': 'Copied',
    'common.download': 'Download',
    'common.clear': 'Clear',
    'common.reset': 'Reset',
  },
} as const;
