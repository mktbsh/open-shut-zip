import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/open-shut-zip',
  plugins: [svelte()],
  build: {
    emptyOutDir: true,
    outDir: 'docs'
  }
})
