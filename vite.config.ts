import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  assetsInclude: ['**/*.jpeg','**/*.jpg', '**/*.png', '**/*.svg', '**/*.gif'],
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
