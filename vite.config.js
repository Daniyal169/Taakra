import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['aos', 'swiper/react', 'swiper/css', 'swiper/modules'], // Keep swiper and aos external
    },
  },
  optimizeDeps: {
    include: ['swiper/css'], // Only include swiper for optimization
  },
});
