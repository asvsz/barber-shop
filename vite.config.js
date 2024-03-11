import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/reservas': {
        target: 'https://system-barbeshop-1a0a77e5c400.herokuapp.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/reservas/, '')
      }
    }
  }
})
