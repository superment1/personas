import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' 

// https://vite.dev/config/
export default defineConfig({
  base: '/sleep/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    target: 'es2017',
    minify: 'esbuild',
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
  }
})
