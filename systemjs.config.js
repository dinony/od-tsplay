SystemJS.config({
  paths: {'npm:' : 'node_modules/'},
  map: {
    '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
    '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
    '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',

    'rxjs': 'npm:rxjs'
  },
  packages: {
    rxjs: {defaultExtension: 'js'}
  },
  warnings: true
})
