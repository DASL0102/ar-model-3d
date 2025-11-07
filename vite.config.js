import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // escucha en todas las interfaces
    port: 5173, // opcional: define el puerto
    strictPort: false, 
    allowedHosts: ['b16303f13c7f.ngrok-free.app'] // agrega tu host ngrok aquí
  }
})
