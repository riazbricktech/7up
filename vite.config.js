// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import fs from 'fs';
// import path from 'path';
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     https: {
//       key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
//       cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem'))
//     },
//     port: 5173
//   }
// })


// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';  

export default defineConfig({
  plugins: [react()],
  server: {
    host: true
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
});
