<script>
export const resource = {
  paths: [
    "/tutorials/middleware/adding-resource-level-middleware"
  ],
  meta: {
    title: "Adding Resource-Level Middleware",
  }
}

export default {
  data() {
    return {
      example_code: this.$example_code['drash/example_code/tutorials/middleware/adding_resource_level_middleware'],
      title: resource.meta.title,
      toc: [
        "Before You Get Started",
        "Implementations And Configuration Requirements",
        "Folder Structure End State",
        "Steps",
        "Verification",
      ]
    };
  },
}
</script>

<template lang="pug">
page(
  :base_url="this.$base_url"
  :title="title"
  :toc="toc"
)
  h2-hash Before You Get Started
  p Unlike server-level middleware, resource-level middleware is specified using <a href="https://www.typescriptlang.org/docs/handbook/decorators.html" target="_BLANK">decorators</a> and a <code>tsconfig.json</code> file.
  p Resource-level middleware is middleware that can only be executed by resources. That is, if a resource is decorated with middleware, then the middleware specified in the decorators will be executed.
  p Your <code>tsconfig.json</code> file will require the following:
  code-block-slotted(language="json" :header="false")
    | {
    |   "compilerOptions": {
    |     "experimentalDecorators": true
    |   }
    | }
  hr
  folder-structure-end-state
    | ▾ /path/to/your/project/
    |   app.ts
    |   home_resource.ts
    |   log_access_middleware.ts
    |   secret_resource.ts
    |   tsconfig.json
    |   verify_token_middleware.ts
  hr
  h2-hash Steps
  ol
    li
      p Create your <code>tsconfig.json</code> file.
      code-block(:title="example_code.tsconfig.filepath" language="json")
        | {{ example_code.tsconfig.contents }}
    li
      p Create your middleware files. These middleware files take in the <code>request</code> and <code>response</code> params.
      code-block(:title="example_code.log_access_middleware.filepath" language="typescript")
        | {{ example_code.log_access_middleware.contents }}
      code-block(:title="example_code.verify_token_middleware.filepath" language="typescript")
        | {{ example_code.verify_token_middleware.contents }}
    li
      p Create your <code>HomeResource</code> file. This file will not have middleware.
      code-block(:title="example_code.home_resource.filepath" language="typescript")
        | {{ example_code.home_resource.contents }}
    li
      p Create your <code>SecretResource</code> file. This resource will use the <code>VerifyTokenMiddleware</code> function to verify that the correct token has been passed in through the URL query params before the request is executed. If the token is incorrect, then the middleware will throw a <code>400</code> or <code>403</code> error response. If the token is correct, then the request will be processed further and the <code>LogAccessMiddleware</code> function will log that the resource has been accessed.
      code-block(:title="example_code.secret_resource.filepath" language="typescript")
        | {{ example_code.secret_resource.contents }}
    li
      p Create your app file. Notice that you do not need to register your middleware here like you do with server-level middleware.
      code-block(:title="example_code.app.filepath" language="typescript")
        | {{ example_code.app.contents }}
  hr
  h2-hash Verification
  p You can verify that your app's code works by making requests like the ones below. Since this tutorial's app sets <code>application/json</code> as the <code>response_output</code>, the server responds to requests with JSON by default.
  ol
    li
      p Run your app.
      code-block(title="Terminal")
        | deno run --allow-net --config tsconfig.json app.ts
    li
      p Make a request using <code>curl</code> like below or go to <code>localhost:1447/</code> in your browser.
      code-block(title="Terminal")
        | curl localhost:1447/
      p This request is not filtered by <code>VerifyTokenMiddleware</code>; therefore, you should receive the following response (we pretty-printed the response for you):
      code-block(language="javascript" :header="false")
        | {
        |   "method": "GET",
        |   "body": "Hello!"
        | }
    li
      p Make a request using <code>curl</code> like below or go to <code>localhost:1447/secret</code> in your browser.
      code-block(title="Terminal")
        | curl localhost:1447/secret
      p This request is filtered by <code>VerifyTokenMiddleware</code>, but it is missing the <code>super_secret_token</code> query param; therefore, you should receive the following response:
      code-block(:header="false")
        | "Where is the token?"
    li
      p Make a request using <code>curl</code> like below or go to <code>localhost:1447/secret?super_secret_token=IsThisIt</code> in your browser.
      code-block(title="Terminal")
        | curl localhost:1447/secret?super_secret_token=IsThisIt
      p This request is filtered by <code>VerifyTokenMiddleware</code>, but it has the wrong <code>super_secret_token</code> query param; therefore you should receive the following response:
      code-block(:header="false")
        | "Mmm... \"IsThisIt\" is a bad token."
    li
      p Make a request using <code>curl</code> like below or go to <code>localhost:1447/secret?super_secret_token=AllYourBaseAreBelongToUs</code> in your browser.
      code-block(title="Terminal")
        | curl localhost:1447/secret?super_secret_token=AllYourBaseAreBelongToUs
      p This request is filtered by <code>VerifyTokenMiddleware</code> and it has the correct <code>super_secret_token</code> query param; therefore you should receive the following response (we pretty-printed the response for you):
      code-block(language="javascript" :header="false")
        | {
        |   "method": "GET",
        |   "body": "You have accessed the secret resource!"
        | }
      p Also, in the terminal where you started your server, you should see the following message:
      code-block(:header="false")
        | "Secret resource was accessed by: {username}"

</template>
