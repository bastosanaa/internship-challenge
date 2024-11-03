import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Muda o diretório de saída para 'build'
    rollupOptions: {
      output: {
        entryFileNames: 'static/js/[name].js',
        assetFileNames: 'static/[name].[ext]', // Isso garante que assets sejam colocados na pasta static
      },
    },
  },
})
