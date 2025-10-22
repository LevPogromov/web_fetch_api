import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/web_fetch_api/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'src/pages/home/index.html'),
        randomFacts: resolve(__dirname, 'src/pages/random-facts/index.html'),
        dogFacts: resolve(__dirname, 'src/pages/dog-facts/index.html'),
        dogImages: resolve(__dirname, 'src/pages/dog-images/index.html'),
      }
    }
  }
})