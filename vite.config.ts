import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({ plugins: [react()], build: { target: 'ES2020', minify: 'terser', manifest: true }, server: { host: '127.0.0.1', port: 5173 } })
