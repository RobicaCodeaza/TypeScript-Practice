import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from './node_modules/vite-plugin-eslint/dist/index.mjs';

const eslintPluginAny: any = eslintPlugin;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPluginAny()], // corrected plugin usage
});
