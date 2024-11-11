import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['aos', 'swiper/react', 'swiper/css', 'react-scroll', 'swiper/modules'], // Added swiper/css here
    }
  },
  optimizeDeps: {
    include: ['react-scroll', 'swiper/css'], // Added swiper/css here for optimization
  }
})
