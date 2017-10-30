SystemJS.config({
  paths: {
    'npm:' : 'node_modules/'
  },
  map: {
    'css': 'node_modules/systemjs-plugin-css/css.js'
  },
  meta: {
    '*.css': {'loader': 'css'}
  },
  transpiler: 'ts',
  warnings: true
})
