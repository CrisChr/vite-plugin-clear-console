# vite-plugin-clear-console
A vite plugin for clearing the consoles

# How to use

## Install
```shell
pnpm add vite-plugin-clear-consoles -D
// or yarn add vite-plugin-clear-consoles -D
// or npm add vite-plugin-clear-consoles -D
```

## Vite config
```js
import { defineConfig } from 'vite'
import ViteClearConsolePlugin from 'vite-plugin-clear-consoles'

export default defineConfig({
  plugins: [
    ViteClearConsolePlugin() // default only clear console.log()
  ],
  // other configs
})
```

**This plugin automatically filter the consoles in node_modules files. That means this plugin cannot clear the consoles in node_modules.**

# Use params to clear console.warn and console.error
```js
import { defineConfig } from 'vite'
import ViteClearConsolePlugin from 'vite-plugin-clear-consoles'

export default defineConfig({
  plugins: [
    ViteClearConsolePlugin({
      consoleType: ['error', 'warn']
    })
  ],
  // other configs
})

```