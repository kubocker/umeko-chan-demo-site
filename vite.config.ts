import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'


export default defineConfig({
  plugins: [
    svelte({})
  ],
  optimizeDeps: {
    include: ['jquery'],
  },
  esbuild: {
    drop: ['console', 'debugger'],
  }
})
