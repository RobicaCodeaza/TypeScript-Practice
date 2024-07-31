import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from './node_modules/vite-plugin-eslint/dist/index.mjs';
import path from 'path';

const eslintPluginAny: any = eslintPlugin;

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [react(), eslintPluginAny()], // corrected plugin usage
});
