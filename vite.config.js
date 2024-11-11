import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['aos', 'swiper/react', 'react-scroll'],
    }
  },
  optimizeDeps: {
    include: ['react-scroll']
  }
})
