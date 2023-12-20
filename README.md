# vite-plugin-clear-console
A vite plugin for clearing the consoles

# How to use
```js
import { defineConfig } from 'vite'
import ViteClearConsolePlugin from 'vite-plugin-clear-console'

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
import ViteClearConsolePlugin from 'vite-plugin-clear-console'

export default defineConfig({
  plugins: [
    ViteClearConsolePlugin({
      consoleType: ['error', 'warn']
    })
  ],
  // other configs
})

```