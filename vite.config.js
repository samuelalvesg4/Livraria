import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   base: '/Livraria/', // 👈 coloque o nome exato do repositório aqui
  plugins: [react()],
})
