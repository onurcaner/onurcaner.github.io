import vitePluginTailwindcss from '@tailwindcss/vite';
import vitePluginReact from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vitePluginReact(), vitePluginTailwindcss()],
  base: '/',
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
    ],
  },
});
