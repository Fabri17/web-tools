// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://brix.center.com', // Cambiar por tu dominio real
  base: '/',
  trailingSlash: 'never',
  
  vite: {
    build: {
      cssCodeSplit: false, // Inline CSS crítico para FCP
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          passes: 3,
          pure_funcs: ['console.log', 'console.info'],
          unsafe_arrows: true,
          unsafe_comps: true,
          unsafe_math: true,
          unsafe_methods: true
        },
        mangle: {
          toplevel: true
        },
        format: {
          comments: false
        }
      },
      rollupOptions: {
        output: {
          manualChunks: undefined,
          compact: true,
          generatedCode: {
            constBindings: true
          }
        }
      },
      target: 'es2020', // Modern browsers para mejor performance
      modulePreload: {
        polyfill: false // Remover polyfill innecesario
      }
    },
    optimizeDeps: {
      include: ['marked', 'dompurify']
    }
  },
  
  compressHTML: true,
  
  build: {
    inlineStylesheets: 'always', // Inline CSS crítico
    assets: '_assets'
  }
});
