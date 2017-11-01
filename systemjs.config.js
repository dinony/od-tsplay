SystemJS.config({
  paths: {'npm:' : 'node_modules/'},
  map: {'rxjs': 'npm:rxjs'},
  packages: {'rxjs': {'defaultExtension': 'js'}},
  warnings: true
})
