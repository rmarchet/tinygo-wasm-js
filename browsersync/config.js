const corsMiddleware = require('./cors.js')
require('dotenv').config({ path: '../.env' }) // Load .env file from ../ since we run it from ./local

const host = process.env.HOST ?? 'localhost'

module.exports = {
  ui: {
    port: 3001
  },
  watchEvents: [
    'change'
  ],
  watch: true,
  ignore: [],
  single: false,
  watchOptions: {
    ignoreInitial: true,
  },
  server: true,
  proxy: false,
  port: process.env.SSL ? 443 : process.env.PORT ?? 8088,
  middleware: [corsMiddleware],
  serveStatic: [],
  ghostMode: {
    clicks: true,
    scroll: true,
    location: true,
    forms: {
      submit: true,
      inputs: true,
      toggles: true
    }
  },
  logLevel: 'info',
  logPrefix: 'WASM',
  logConnections: true,
  logFileChanges: true,
  logSnippet: true,
  rewriteRules: [],
  open: process.env.OPEN_BROWSER ?? false,
  browser: 'default',
  cors: true,
  https: process.env.SSL ? {
    key: `./certs/localhost-key.pem`,
    cert: `./certs/localhost.pem`
  } : false,
  xip: false,
  hostnameSuffix: false,
  reloadOnRestart: false,
  notify: true,
  scrollProportionally: true,
  scrollThrottle: 0,
  scrollRestoreTechnique: 'window.name',
  scrollElements: [],
  scrollElementMapping: [],
  reloadDelay: 0,
  reloadDebounce: 500,
  reloadThrottle: 0,
  plugins: [],
  injectChanges: true,
  startPath: null,
  minify: true,
  host,
  localOnly: false,
  codeSync: true,
  timestamps: true,
  clientEvents: [
    'scroll',
    'scroll:element',
    'input:text',
    'input:toggles',
    'form:submit',
    'form:reset',
    'click',
  ],
  socket: {
    socketIoOptions: {
      log: false
    },
    socketIoClientConfig: {
      reconnectionAttempts: 50
    },
    path: '/browser-sync/socket.io',
    clientPath: '/browser-sync',
    namespace: '/browser-sync',
    clients: {
      heartbeatTimeout: 5000,
    }
  },
  tagNames: {
    less: 'link',
    scss: 'link',
    css: 'link',
    jpg: 'img',
    jpeg: 'img',
    png: 'img',
    svg: 'img',
    gif: 'img',
    js: 'script',
  },
  injectNotification: false
}
