import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
process.env.DEBUG = 'vite:*';

export default defineConfig({
  plugins: [react()],
})


