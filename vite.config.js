import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portofolio-dio_lutvi/'  // GANTI INI, jangan pakai /portofolio-dio_lutvi/
})