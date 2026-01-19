import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/Diolutviandr3/portofolio-dio_lutvi'  // Sesuaikan dengan nama repositori GitHub
})