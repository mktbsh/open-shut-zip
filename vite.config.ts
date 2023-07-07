import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/open-shut-zip',
  plugins: [svelte(), tsconfigPaths()],
  build: {
    emptyOutDir: true,
    outDir: 'docs'
  }
})
