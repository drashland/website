<script>
export const resource = {
  paths: [
    "/tutorials/middleware/introduction"
  ],
  meta: {
    title: "Introduction To Middleware",
  }
}

export default {
  data() {
    return {
      title: resource.meta.title,
      example_code: this.$example_code['drash/example_code/tutorials/middleware/introduction'],
      toc: [
        "Basics",
        "Middleware Types",
        "Setting The Execution Location",
        "Sorting Middleware",
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
  h2-hash Basics
  p Drash defines middleware according to the MDN: <a href="https://developer.mozilla.org/en-US/docs/Glossary/Middleware" target="_BLANK">https://developer.mozilla.org/en-US/docs/Glossary/Middleware</a>.
  p Adding middleware to your application is useful when you want to filter requests throughout the request-resource-response lifecycle.
  hr
  h2-hash Middleware Types
  p There are two types of middleware in Drash: server-level middleware and resource-level middleware.
  h3#server-level-middleware Server-Level Middleware
  p Server-level middleware is middleware executed by the server on every request. You define server-level middleware when you create your server object. Server-level middleware can be executed before or after a request. Read the <a :href=" '/#/tutorials/middleware/introduction#setting-the-execution-location'">Setting The Execution Location</a> section below for more information on execution locations.
  p Take the example below. There is a set of server-level middleware that will execute before the request and after the request. <code>AuthMiddleware</code> and <code>CacheMiddleware</code> will execute before the request. <code>SomeOtherMiddleware</code> will execute after the request. These middleware classes will execute on every request.
  code-block(:header="false" language="typescript" line_highlight="2-10")
    | {{ example_code.location_server_level.contents }}
  h3#resource-level-middleware Resource-Level Middleware
  p Unlike server-level middleware, resource-level middleware is specified using <a href="https://www.typescriptlang.org/docs/handbook/decorators.html" target="_BLANK">decorators</a> and a <code>tsconfig.json</code> file. Resource-level middleware can only be executed by resources. That is, if a resource is decorated with middleware, then the middleware specified in the decorators will be executed.
  p Take the example below. This resource contains two sets of middleware &mdash; class level and HTTP method level. With resource-level middleware, you can specify middleware to execute globally for all HTTP methods, or be more granular by decorating just an HTTP method.
  code-block(:header="false" language="typescript" line_highlight="1-4,11-14")
    | {{ example_code.location_resource_level.contents }}
  hr
  h2-hash Setting The Execution Location
  p There are two locations where middleware can be executed: before the request and after the request. View the <a :href=" '/#/lifecycle-diagram'">Lifecycle Diagram</a> for a visual representation.
  h3#before-the-request Before The Request
  p Middleware executed before the request means it is executed before a resource's HTTP method (e.g., <code>MyResource.GET()</code>, <code>MyResource.POST()</code>, <code>MyResource.DELETE()</code>) is called.
  h3#after-the-request After The Request
  p Middleware executed after the request means it is executed immediately after a resource's HTTP method (e.g., <code>MyResource.GET()</code>, <code>MyResource.POST()</code>, <code>MyResource.DELETE()</code>) is called and before a response is sent to the client that made the request.
  h3#setting-the-execution-location-of-server-level-middleware Setting The Execution Location Of Server-Level Middleware
  p You can have server-level middleware execute before and after the request by placing your middleware in the <code>before_request</code> array or <code>after_request</code> array. See the example below to see middleware defined in these arrays.
  code-block(:header="false" language="typescript" line_highlight="3,7")
    | {{ example_code.location_server_level.contents }}
  h3#setting-the-execution-location-of-resource-level-middleware Setting The Execution Location Of Resource-Level Middleware
  p You can have resource-level middleware execute before and after the request by placing your middleware in the <code>before_request</code> array or <code>after_request</code> array in your resource class' middleware decorators.  See the example below to see middleware defined in these arays.
  code-block(:header="false" language="typescript" line_highlight="2-3,12-13")
    | {{ example_code.location_resource_level.contents }}
  hr
  h2-hash Sorting Middleware
  p Middleware is executed in the order you define them. Take the examples below.
  p The following server-level middleware would execute in the following order:
  ul
    li <code>OneMiddleware</code>
    li <code>TwoMiddleware</code>
  code-block(:header="false" language="typescript" line_highlight="4-5")
    | {{ example_code.sorting_server_level.contents }}
  p The following resource-level middleware would execute in the following order:
  ul
    li <code>RedMiddleware</code>
    li <code>BlueMiddleware</code>
  code-block(:header="false" language="typescript" line_highlight="3-4")
    | {{ example_code.sorting_resource_level.contents }}
</template>
