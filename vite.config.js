import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
  },
  base: '/',
  build: {
    // Bundle boyutunu optimize et
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk'ları ayır
          vendor: ['react', 'react-dom'],
          motion: ['motion/react'],
          three: ['three', '@react-three/fiber'],
        },
      },
    },
    // Chunk boyut uyarılarını artır
    chunkSizeWarningLimit: 1000,
    // Minification'ı optimize et
    minify: 'esbuild',
  },
  // Geliştirme performansını artır
  optimizeDeps: {
    include: ['react', 'react-dom', 'motion/react', 'three', '@react-three/fiber'],
  },
})
