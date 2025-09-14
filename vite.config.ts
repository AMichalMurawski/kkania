import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Katarzyna Kania Fotografia',
        short_name: 'Kania Photo',
        description: 'Profesjonalne sesje fotograficzne, galerie zdjęć i zamówienia online',
        theme_color: '#754540',
        background_color: '#FFE7E2',
        icons: [
          { src: 'favicon-32x32.png', sizes: '32x32', type: 'image/png' },
          { src: 'favicon-48x48.png', sizes: '48x48', type: 'image/png' },
          { src: 'apple-touch-icon.png', sizes: '180x180', type: 'image/png', purpose: 'any maskable' }
        ]
      }
    })
  ],
  server: {
    port: 5170,
  },
  build: {
    cssCodeSplit: true,
  },
});
