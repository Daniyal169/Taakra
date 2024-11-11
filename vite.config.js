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
