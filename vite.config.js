import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' 


export default defineConfig({
  base: '/sleep/',
  plugins: [vue()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
  },
  build: {
    target: 'es2019',              
    minify: 'esbuild',
    cssCodeSplit: true,
    assetsInlineLimit: 1024,
    modulePreload: { polyfill: false }, 
    rollupOptions: {
      treeshake: true,
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('vue')) return 'vendor-vue'
            return 'vendor'
          }
        }
      }
    }
  },
  esbuild: {
    drop: ['console','debugger']  
  }
})

