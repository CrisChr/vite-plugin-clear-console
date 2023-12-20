import { defineConfig } from 'vite'
import path from 'path'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  plugins: [
    Inspect()
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'ViteClearConsolePlugin',
      fileName: 'main',
      formats: ['es', 'cjs']
    }
  }
})