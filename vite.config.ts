import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: [
      '@tldraw/tldraw',
      '@tldraw/utils',
      '@tldraw/state',
      '@tldraw/store',
      '@tldraw/editor',
      '@tldraw/ui',
    ],
  },
})
