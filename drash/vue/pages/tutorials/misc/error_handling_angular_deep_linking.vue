<script>
export const resource = {
  paths: ["/tutorials/misc/error-handling-angular-deep-linking"],
  meta: {
    title: "Error Handling: Angular Deep Linking",
  }
}

export default {
  data() {
    return {
      example_code: this.$example_code['drash/example_code/tutorials/misc/error_handling_angular_deep_linking'],
      toc: {
        items: [
          "Before You Get Started",
          "Steps",
        ]
      }
    };
  },
}
</script>

<template lang="pug">
page-tutorial(
  :toc="toc"
)
  div.row
    div.col
      hr
      h2-hash Before You Get Started
      p This tutorial assumes you have a working Angular app stacked with Deno and Drash.
      p This tutorial solves the issue commonly surfaced from <a href="https://angular.io/guide/deployment#server-configuration" target="_BLANK">https://angular.io/guide/deployment#server-configuration</a>.
      p In order to solve the issue, you have to override <code>Drash.Http.Server</code> and override its <code>handleHttpRequestError()</code> method.

  div.row
    div.col
      hr
      h2-hash Steps
      ol
        li 
          p Create your <code>app.ts</code> file.
          p
            code-block-slotted(language="typescript" line_highlight="24-27")
              template(v-slot:title) /path/to/your/project/app.ts
              template(v-slot:code)
                | import { Drash } from "https://deno.land/x/drash/mod.ts";
                | const decoder = new TextDecoder();
                | 
                | class AngularServer extends Drash.Http.Server {
                |   public handleHttpRequestError(
                |     request: any,
                |     error: any,
                |     resource: Drash.Http.Resource | any = {},
                |     response: Drash.Http.Response | any = {}
                |   ): any {
                | 
                |     if (resource) {
                |       if (!response) {
                |         if (typeof resource[request.method.toUpperCase()] !== "function") {
                |           error = new Drash.Exceptions.HttpException(405);
                |         }
                |       }
                |     }
                | 
                |     response = new Drash.Http.Response(request);
                |     response.status_code = error.code ? error.code : null;
                |     response.body = error.message ? error.message : response.getStatusMessage();
                | 
                |     if (response.status_code == 404) {
                |       response.headers.set("Content-Type", "text/html");
                |       response.body = new TextDecoder().decode(Deno.readFileSync("./path/to/your/index.html"));
                |     }
                | 
                |     try {
                |       this.executeMiddlewareServerLevelAfterRequest(request, null, response);
                |     } catch (error) {
                |       // Do nothing
                |     }
                | 
                |     return response.send();
                |   }
                | }
                | Drash.Http.Server = AngularServer;
                | 
                | export class AngularResource extends Drash.Http.Resource {
                |   static paths = ["/"];
                |   public GET() {
                |     try {
                |       const raw = Deno.readFileSync("./path/to/your/index.html");
                |       const template = decoder.decode(raw);
                |       this.response.body = template;
                |     } catch (error) {
                |       throw new Drash.Exceptions.HttpException(400, "index error");
                |     }
                |     return this.response;
                |   }
                | }
                | 
                | const server = new Drash.Http.Server({
                |   response_output: "text/html",
                |   resources: [AngularResource],
                |   directory: `${await Deno.realpath(".")}`,
                |   static_paths: ["/public"],
                | });
                |
                | server.run({
                |   hostname: "localhost",
                |   port: 1447
                | });
          p Take note of the highlighted code. This code will help your Angular app by serving your default <code>index.html</code> file. Your default <code>index.html</code> file is the one you define for your Angular app. If a deep link is used, Drash will throw a <code>404</code> error in your Angular app. By adding the highlighted code, you tell Drash to reroute back to your Angular app's <code>index.html</code> file on <code>404</code> errors.
</template>
