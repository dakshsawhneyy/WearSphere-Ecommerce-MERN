import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
	port: 5174,
	host: '0.0.0.0'
  } // Added Port number so that frontend and backend not clash
})
