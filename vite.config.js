import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // or '/portfolio/' if using a repo page
  plugins: [react()],
})

