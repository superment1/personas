import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' 


export default defineConfig({
  base: '/',
  plugins: [ vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === 'vturb-smartplayer' || tag.startsWith('vturb-')
        }
      }
    })],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
  },
  build: {
    target: 'es2020',              
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

