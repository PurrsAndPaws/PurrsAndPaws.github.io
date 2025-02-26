import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Keep as '/' since it's a user site
  plugins: [react()],
});
