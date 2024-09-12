import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();  

export default defineConfig({
  base: process.env.VITE_BASE_URL || '/',
  plugins: [react()],
  assetsInclude: ['**/*.png', '**/*.PNG', '**/*.mp4'],
  build: {
    rollupOptions: {
      external: ['/frontendtask/src/main.jsx'],
    },
  }
});
