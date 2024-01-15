[![Version](https://badgen.net/npm/v/vite-plugin-clear-consoles)]("https://www.npmjs.com/package/vite-plugin-clear-consoles")
[![Weekly Downloads](https://badgen.net/npm/dw/vite-plugin-clear-consoles)]("https://www.npmjs.com/package/vite-plugin-clear-consoles")

# Description
A vite plugin for clearing the consoles

# How to use

## Install
```shell
pnpm add vite-plugin-clear-consoles -D
// or yarn add vite-plugin-clear-consoles -D
// or npm install vite-plugin-clear-consoles --save-dev
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

## Use params to clear console.warn and console.error
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