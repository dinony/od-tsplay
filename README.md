# od-tsplay

> Simple TypeScript Project Template for Prototyping

## Purpose

The goal is to provide a project template, which is as simple as possible and provides the necessary amount of comfort to start prototyping or experimenting with TypeScript.

## Features

The features are the minimum of requirements I find necessary to get started.

- Browsersync (watch mode)
- TypeScript compilation (watch mode)
- Strict compiler default settings
- Intermediate compilation output in `./tsc-out`
- Module loading via [SystemJS](https://github.com/systemjs/systemjs)
- Direct access to underlying tools

## Usage

git, node/npm is assumed to be installed on your system.

### Initialization

```
$ git clone git@github.com:dinony/od-tsplay.git <your-project>
$ cd <your-project>
$ npm i
```

### Start

```bash
$ npm run dev
```
Open browser [localhost:3000](http://localhost:3000/index.html).

### (Optional) Adapt package.json

Do not forget to adapt `package.json` if you plan to publish your results.

## Process

[SystemJS](https://github.com/systemjs/systemjs) is the module loader of choice.

`index.html` [imports](https://github.com/systemjs/systemjs/blob/master/docs/system-api.md#systemjsimportmodulename--normalizedparentname---promisemodule) the compilation output (`./tsc-out/index.js`).
Additional libraries need to be added to [systemjs.config.js](https://github.com/dinony/od-tsplay/blob/master/systemjs.config.js)
according to the [config API](https://github.com/systemjs/systemjs/blob/master/docs/config-api.md).

### Example: Add RxJS

1. Install dependency

```bash
npm i -S rxjs
```
2. Adapt systemjs.config.js

```js
SystemJS.config({
  paths: {'npm:' : 'node_modules/'},
  map: {'rxjs': 'npm:rxjs'},
  packages: {'rxjs': {'defaultExtension': 'js'}},
  warnings: true
})
```
3. Play

```typescript
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/map'

Observable.timer(0, 512).map(i => Math.pow(2, i))
  .subscribe(i => {console.log(i)})
```

## Browsersync

Browsersync is used to synchronize the browser when changes are made.
Refer to the [browsersync options](https://www.browsersync.io/docs/options) if you want to change the current [configuration](https://github.com/dinony/od-tsplay/blob/master/tools/browserSync.js).

## NPM Scripts

```bash
$ npm run <script>
```

| Name          | Description
|---------------|-------------------------------------------
| dev           | Concurrently run Browsersync and tsc compiler in watch mode
| serve         | Just start Browsersync
| tsc:src       | Just start tsc compiler


## Anti-Goals

- Opaque layers of build steps / optimizations
- Unnecessary tooling barrieres
- Unnecessary CLI abstractions/indirections
- etc.

