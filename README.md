# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

===========================
npm create vite@latest  
npm i normalize.css  
npm i @reduxjs/toolkit react-redux  
npm i -D sass sass-loader

https://favicon.io/favicon-converter/
	Favicon Generator

npm install -D vite-plugin-pwa

// vite.config.ts
  import {VitePWA} from 'vite-plugin-pwa';
  const vitePWA = VitePWA({
    registerType: 'autoUpdate',
  });
  // plugins + vitePWA

>build
sw.js
  precacheAndRoute

https for localhost  
https://www.npmjs.com/package/https-localhost
  ...dist>serve
  https://localhost

// vite.config.ts
  manifest icons

  workbox 
    globPatterns: ['**/*.{js,css,html,ico,png,svg,jpeg,woff,woff2,txt}'],

пример описания динамического кэширования:
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/cup-time-api-q31j.onrender.com\/api/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: "api-cache",
          cacheableResponse: {
            statuses: [0, 200]
          },
        },
      },
      {
        urlPattern: /^https:\/\/cup-time-api-q31j.onrender.com\/images/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: "img-cache",
          cacheableResponse: {
            statuses: [0, 200]
          },
        },
      },
    ],

'CacheFirst' | 'CacheOnly' | 'NetworkFirst' | 'NetworkOnly' | 'StaleWhileRevalidate' ...


публикуем папку dist>
  npm install gh-pages --save-dev

  package.json
    "deploy": "gh-pages -d dist",
    "predeploy": "npm run build",

github:
https://github.com/illicchpv/todo-pwa-ts-vite

deploy:
https://illicchpv.github.io/todo-pwa-ts-vite/