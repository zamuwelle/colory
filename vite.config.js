import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
	base: '/color-cycle-react/',
  plugins: [
		react(),
		tailwindcss()
	],
})
