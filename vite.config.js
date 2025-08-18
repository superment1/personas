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
    target: 'es2019',               // <— deixa de emitir JS legado
    minify: 'esbuild',
    cssCodeSplit: true,
    assetsInlineLimit: 1024,
    modulePreload: { polyfill: false }, // <— não injeta polyfill de modulepreload
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
    drop: ['console','debugger']    // opcional: menos JS para parse/executar
  }
})

// // https://vite.dev/config/
// export default defineConfig({
//   base: '/sleep/',
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src')
//     }
//   },
//   build: {
//     target: 'es2017',
//     minify: 'esbuild',
//     cssCodeSplit: true,
//     assetsInlineLimit: 4096,
//   }
// })
