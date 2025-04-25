
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
    'index.csr.html': {size: 27160, hash: 'bce4e06dfb8b70aa53020535dde6bdfd067ea39175df962aac1bf15c8fbdeb9b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 20550, hash: '67739b0e4fef517a40825a3bfc77d5b4fa67b45796be432d5deebef3ccb39371', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-XHNVJ6LU.css': {size: 18956, hash: 'ZgVC/tXFjNk', text: () => import('./assets-chunks/styles-XHNVJ6LU_css.mjs').then(m => m.default)}
  },
};
