# Dev environment setup and workflow

## Running the dev server

Copy the configs.

```
cp configs.json.sample configs.json
```

Ensure the configs are correct.

```
root_directory: "/path/to/this/repo"
```

Install dependencies.

```
npm install
```

Run webpack to generate the bunndles (this can take up to 10 seconds for development).

```
npm run webpack
```

Run the Node server.

```
npm run server
```

## Copying the API Reference JSON data from deno-drash

_This requires you to have cloned drashland/deno-drash to the same directory level as drashland/website._

```
npm run drash:copy-api-reference
```

## Screenshots

Sometimes you will need to add screenshots to documentation pages. Screenshots should be 1400x1000.
