# deno-drash Documentation

## Technology Stack

* [dejs](https://github.com/syumai/dejs) for its template engine;
* [npm](https://www.npmjs.com) to map console scripts to the `npm run` command;
* [Vue](https://vuejs.org) for its front-end framework;
* [webpack](https://webpack.js.org/) to enable bundling of Vue templates and enabling Vue single file components; and
* [pug](https://pugjs.org/api/getting-started.html) for HTML markup in Vue single file components

## Setup

Install dependencies.

```shell
npm install
```

Install watchdog for file watching.

```shell
npm run install-watchdog
```

_The installer warns you about setting Python binaries to your `$PATH` variable. Pay attention to that message._

## Running The Development Environment

The dev environment requires two shells:
    * A shell to run the `docs.ts` Drash server; and
    * A shell to run `webpack`.

The dev environment is watched by `watchmedo`. `watchmedo` is like `nodemon` for Node.js. Every time you save a file, the dev environment's server will reload with your changes. However, the browser will not reload on its own.

Run the `docs.ts` app server.

```shell
npm run dev
```

Run `webpack` and have it watch for file changes.

```shell
npm run dev-webpack-watch
```

## Compile SASS to CSS

* `webpack` doesn't currently watch the `.scss` files. So, if you make changes to a `.scss` file, then make sure you run `npm run sass` to compile your changes.

## .DS_Store Cleanup

```shell
npm run delete-ds-store
```

## Debugging

`watchdog` kills the `docs.ts` app server before reloading, but sometimes it fails to do it. You can manually kill the app server by running:

```shell
npm run dev-kill
```

## Screenshots

Sometimes you will need to add screenshots to documentation pages. Screenshots should be 1400x1000.
