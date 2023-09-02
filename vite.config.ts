import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/weather_app_dev_challenges",
  plugins: [react()],
  server: {
    port: 8000,
  },
})
