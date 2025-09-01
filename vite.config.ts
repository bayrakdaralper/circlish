
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: GitHub Pages requires base to be your repo name with leading/trailing slashes.
// For https://<user>.github.io/circlish/ it must be '/circlish/'
export default defineConfig({
  base: '/circlish/',
  plugins: [react()],
})
