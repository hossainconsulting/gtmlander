import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'ES2020',
    minify: 'terser',
    terserOptions: {
      compress: { drop_console: true },
      output: { comments: false }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'three': ['three', '@react-three/fiber', '@react-three/drei'],
          'animation': ['framer-motion', 'gsap']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  server: {
    port: 5173,
    strictPort: false
  }
})
