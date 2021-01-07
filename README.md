# Drash Land Website

## Table Of Contents

* [Requirements](#requirements)
* [Versioned Docs Overview](#versioned-docs-overview)
* [Running The Development Environment](#running-the-development-environment)
* [Setting Up The Whole Environment](#setting-up-the-whole-environment)
* [Updating Staging/Prod](#updating-stagingprod)
* [Creating A New Major Version](#creating-a-new-major-version)
* [Scripts](#scripts)
* [Technology Stack](#technology-stack)

## Requirements

* Git v2.22+ (the build scripts use `git branch --show-current` and this is a feature of v2.22+)
* Node v12.x (use this version to prevent `node-sass` errors)
* Deno v1.5.4+

## Versioned Docs Overview

To achieve versioned documentation, every module has it's own branch for each major version. These branches hold the source code (the Vue files) for the documentation of that module, and these branches are just used to create a bundled file, which the frontend will use to display the documentation

## Running The Development Environment

This is specifically for working on a specific module, and will only 'refresh' the code  for that module.

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
$ npm run dev:server <module>-<version>
```

4. Run webpack

Note: Must be in a separate window

```
$ npm run dev:webpack <module>-<version> watch
```

## Setting Up The Whole Environment

In the event you want to build an environment (e.g., staging, production, QA), you will need to take the following steps:

1. Clone the repo and go into it.

```
$ git clone https://github.com/drashland/website.git
$ cd website
```

2. Check out the `main` branch.

```
$ git checkout main
```

3. Build the entire ecosystem.

```
$ npm run build:ecosystem
```

4. Test that the environment works.

```
$ deno run --allow-net --allow-read app.ts
```

5. (optional) Setup for Staging/Production

    5.1. Set up a web server to handle serving the website application. The website application runs on `localhost:1445`.

    * For Apache: https://github.com/drashland/website/blob/main/apache.conf
    * For Nginx: _In progress_

    5.2. Install [PM2](https://pm2.keymetrics.io/).

    5.3. Make a copy of `ecosystem.config.sample.js` to `ecosystem.config.js`. Edit your copied file as necessary. Make sure the `cwd` field properly points to your website repository clone.

    5.4. Run PM2. PM2 will use your `ecosystem.config.js` file to start the website application and keep your application online 24/7.

    ```
    $ pm2 start
    
    [PM2] Spawning PM2 daemon with pm2_home=/home/someone/.pm2
    [PM2] PM2 Successfully daemonized
    [PM2][WARN] Applications Drash Land (localhost:1445) not running, starting...
    [PM2] App [Drash Land (localhost:1445)] launched (1 instances)
    ┌─────┬────────────────────────────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
    │ id  │ name                           │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
    ├─────┼────────────────────────────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
    │ 0   │ Drash Land (localhost:1445)    │ default     │ N/A     │ fork    │ 228260   │ 0s     │ 0    │ online    │ 0%       │ 24.8mb   │ someone  │ enabled  │
    └─────┴────────────────────────────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘
    ```
   
## Updating Staging/Prod

1. Ssh onto the respective server

2. Pull all module branches to update the local source code: `npm run git:pull-all`

3. Rebuild the ecosystem: `npm run build:ecosystem`

4. Restart pm2: `pm2 restart <id|name>`
   
## Creating A New Major Version

TODO

## Scripts

### build

* `npm run build:docs <module> <version>`

    Builds documentation pages for a specific module.

    Example:

    The following will build `/assets/bundles/drash.v1.x.js` and `/assets/bundles/vendors~drash.v1.x.js`.
    
    ```shell
    $ git checkout drash-v1.x
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
    $ git checkout <module>-<version>
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
