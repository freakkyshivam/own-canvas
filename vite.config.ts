import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['tldraw'],
  },
  build: {
    commonjsOptions: {
      include: [/tldraw/, /node_modules/],
    },
  },
})
