import vitePluginTailwindcss from '@tailwindcss/vite';
import vitePluginReact from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vitePluginReact(), vitePluginTailwindcss()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
    ],
  },
  base:
    process.env.NODE_ENV === 'production'
      ? 'https://onurcaner.github.io/'
      : '/',
});
