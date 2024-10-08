// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'
import { VitePWA } from 'vite-plugin-pwa';

const vitePWA = VitePWA({
  registerType: 'autoUpdate',
  manifest: {
    "short_name": "todo list",
    "name": "todo list sample project",
    "description": "описание учебного проекта",
    "display": "standalone",
    "theme_color": "#ffffff",
    "background_color": "#ffffff",
    "lang": "ru",
    "start_url": "/todo-pwa-ts-vite",
    "scope": "/",
    icons: [
      {
        "src": "./favicons/android-chrome-144x144.png",
        "sizes": "144x144",
        "type": "image/png",
      },
      {
        "src": "./favicons/android-chrome-192x192.png",
        "sizes": "192x192",
        "type": "image/png",
      },
      {
        "src": "./favicons/android-chrome-512x512.png",
        "sizes": "512x512",
        "type": "image/png",
      },
      // favicon-16x16.png favicon-32x32.png mstile-150x150.png 
      // apple-touch-icon.png favicon.ico 
    ],
    "screenshots": [
      {

        "src": "./img/screen-840x550.png",
        "sizes": "840x550",
        "type": "image/png",
        "form_factor": "wide",
      },
    ],
    // "shortcuts": [
    //   {
    //     "name": "To do list",
    //     "short_name": "ToDo",
    //     "description": "Список дел",
    //     "url": "/todo-pwa-ts-vite",
    //     // "icons": [{ "src": "/images/today.png", "sizes": "192x192" }]
    //   },
    // ],    
  },
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg,jpeg,woff,woff2,txt}'],
  },
});


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePWA,
  ],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
})
