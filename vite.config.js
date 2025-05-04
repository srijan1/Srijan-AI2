// filepath: c:\Users\hp\Documents\Srijan-AI2\vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/srijan1/', // Replace 'repo-name' with your GitHub repository name
});