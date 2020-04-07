# deno-drash-website

<a href="https://github.com/drashland/deno-drash/">
  <img src="https://img.shields.io/github/release/drashland/deno-drash.svg?color=bright_green&label=drash%20latest">
</a> 
<a href="https://github.com/drashland/deno-drash-docs/actions?query=workflow%3Aci">
  <img src="https://img.shields.io/github/workflow/status/drashland/deno-drash-docs/master?label=master">
</a>

## Pages

* Landing Page: [https://drash.land](https://drash.land)
    * This page serves as the entry point to all Drash modules and documentation.
* deno-drash Production: [https://drash.land/docs](https://drash.land/docs)
    * This page includes code that is released and stable.
* deno-drash Staging: [https://drash.land/docs/staging](https://drash.land/deno-drash/staging)
    * This page includes code that is still under development, but ready to be realeased soon. This page might not always be accessible.

## Technology Stack

* [deno](https://deno.land) for its web server;
* [Drash](https://drash.land) for its web server framework;
* [dejs](https://github.com/syumai/dejs) for its template engine;
* [npm](https://www.npmjs.com) to map console scripts to the `npm run` command;
* [Vue](https://vuejs.org) for its front-end framework;
* [webpack](https://webpack.js.org/) to enable bundling of Vue templates and enabling Vue single file components; and
* [pug](https://pugjs.org/api/getting-started.html) for HTML markup in Vue single file components

## Setup

Install the prerequisites:

* [Homebrew](https://brew.sh/)
* [Python v2.7.16](https://www.python.org/downloads/release/python-2716/)
* [Node v13.x and npm v6.x](https://nodejs.org/en/download/current/)

Go to the following directory:

```
cd docs
```

Install Sass.

```
brew install sass/sass/sass
```

Install watchdog for file watching.

```shell
console/install_watchdog
```

Add the following to your `$PATH` variable. _The installer warns you about setting Python binaries to your `$PATH` variable. Please follow Python's instructions._

```
~/Library/Python/2.7/bin 
```

Install Node modules.

```shell
npm install
```

Copy the dependency file.

```shell
cp deps.sample.ts deps.ts
```

Set up your `app.ts` config file by first copying the sample config file.

```shell
cd docs/conf
cp app.sample.ts app.ts
```

Open your `app.ts` config file and make sure your `deno_drash.directory` and `server.directory` configs are set correctly.

* The `deno_drash.directory` config should point to your `deno-drash` local repo.
* The `server.directory` config should point to your `deno-drash-website` local repo's `docs` directory.
* You must use absolute paths when setting these configs.

```typescript
export default {
  ...
  deno_drash: {
    directory: "/var/src/drashland/deno-drash",
  },
  ...
  server: {
    directory: "/var/src/drashland/deno-drash-website/docs",
  }
}
```

## Running The Development Environment For `/docs`

Step 1: Run the dev server.

```shell
console/dev
```

The dev server is watched by `watchdog`. `watchdog` is like `nodemon` for Node.js. Every time you save changes, the dev server will reload with your changes. The browser will not reload on its own. You have to do that yourself.

The dev server starts webpack in the background with the `--watch` flag. You do not need to worry about recompiling the Vue components. However, if you make a change to `webpack.config.js`, then you will need to reload the dev server. The dev server does not reload with changes made to `webpack.config.js`.

### Troubleshooting

node-sass

* Solution: `npm rebuild node-sass`

watchdog

* Solution: Install [Python 2.7](https://www.python.org/download/releases/2.7/)

## Compile SASS to CSS

```shell
npm run sass
```

`.scss` files are currently NOT being watched. So, if you make changes to a `.scss` file, then make sure you run the above command to compile your changes.

## Screenshots

Sometimes you will need to add screenshots to documentation pages. Screenshots should be 1400x1000.
