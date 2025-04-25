
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
    'index.csr.html': {size: 27155, hash: '179d69cc11800f2b97c8c72c6acf11108b287fc38c1b6b765c65f8b82485150d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 20545, hash: '6f7f40ca3dcde4dc749edd75e66511d4e5d7c4df1a7fa4a5e3f22e6f51167a80', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-XHNVJ6LU.css': {size: 18956, hash: 'ZgVC/tXFjNk', text: () => import('./assets-chunks/styles-XHNVJ6LU_css.mjs').then(m => m.default)}
  },
};
