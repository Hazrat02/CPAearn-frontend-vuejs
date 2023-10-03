import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base:'cpaearn',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  "noImplicitAny": false,
  "allowJs": true,


})
// import { fileURLToPath, URL } from 'node:url';
// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';

// // Get the current file path
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src')
//     }
//   },
//   build: {
//     outDir: 'public', // Output directory for the build
//     rollupOptions: {
//       input: {
//         main: path.resolve(__dirname, './src/main.js') // Path to your JavaScript entry file
//       }
//     }
//   }
// });
