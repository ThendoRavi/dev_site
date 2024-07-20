import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/dev_site/', // Replace with your repository name
  plugins: [react()],
});
