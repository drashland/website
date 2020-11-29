# Drash Land Website

## Table Of Contents

* [Running The Development Environment](#running-the-development-environment)
* [Building An Environment](#building-an-environment)
* [Scripts](#scripts)
* [Technology Stack](#technology-stack)

## Running The Development Environment

1. Install npm dependencies.

```
$ npm install
```

2. Check out the branch you want to work on.

```
$ git checkout drash-v1.x
```

3. Run the development server.

```
$ npm run dev:server
```

4. Run webpack

```
$ npm run dev:webpack
```

## Scripts

### build

* `npm run build:docs <module> <version>`

    Builds documentation pages for a specific module.

    Example:

    The following will build `/assets/bundles/drash.v1.x.js` and `/assets/bundles/vendors~drash.v1.x.js`.
    
    ```shell
    $ npm run build:docs drash v1.x
    ```

* `npm run build:ecosystem`
    
    Builds documentation pages for all modules -- storing all bundles in the `/assets/bundles` directory. Run `npm run git:pull-all` before running this script to ensure all documentation code is up to date.

### dev

* `npm run dev:server <module> <version>`

    Starts the development environment for a specific module and version.

    Example:

    The following will start the development environment for the `drash-v1.x` branch.

    ```shell
    $ npm run dev:server drash v1.x
    ```

### git

* `npm run git:merge-main`

    Merges the `main` branch into all `<module>-<version>` branches. All `<module>-<version>` branches should be kept up to date with the `main` branch. This script makes it easier to do this.

* `npm run git:pull-all`

    Checks out and pulls down the latest changes from all `<module>-<version>` branches. Run this script before using `npm run build:ecosystem`. This ensures all documentation code is up to date.

## Technology Stack

* [Deno](https://deno.land)
* [Drash](https://drash.land)
* [Vue](https://vuejs.org)
* [denon](https://github.com/denosaurs/denon)
* [pug](https://pugjs.org/api/getting-started.html)
* [webpack](https://webpack.js.org/)
