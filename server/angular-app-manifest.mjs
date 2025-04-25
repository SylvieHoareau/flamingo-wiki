
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/flamingo-wiki/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/leaflet/dist/leaflet-src.js": [
    {
      "path": "chunk-6GUE36TD.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 27095, hash: '8e5c9b617a8080a18f1f1dcf3f383c91f68383f6da84e3e6499d93ba86d17953', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 20484, hash: '823379a9b589bcba127d2b6b977a765f7549cb6a6f54dd16754ed4cf78590dcd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-XHNVJ6LU.css': {size: 18956, hash: 'ZgVC/tXFjNk', text: () => import('./assets-chunks/styles-XHNVJ6LU_css.mjs').then(m => m.default)}
  },
};
