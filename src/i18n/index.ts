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
    'hero.subtitle': 'Hecho por devs, para devs. Convierte Markdown a PDF, optimiza imágenes, genera datos de prueba y más. Todo procesado localmente en tu navegador. Cero configuración, cero complicaciones.',
    'hero.cta.primary': 'Abrir app ahora',
    'hero.cta.secondary': 'Ver herramientas disponibles',
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
    'hero.subtitle': 'Built by devs, for devs. Convert Markdown to PDF, optimize images, generate test data and more. Everything processed locally in your browser. Zero config, zero hassle.',
    'hero.cta.primary': 'Open app now',
    'hero.cta.secondary': 'View available tools',
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
