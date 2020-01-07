let Drash = (await import(Deno.env().DENO_DRASH)).default;

import response from "./part_4/response.ts";
Drash.Http.Response = response;

import CoffeeResource from "./part_4/coffee_resource.ts";
import TeaResource from "./part_4/tea_resource.ts";

let server = new Drash.Http.Server({
  resources: [CoffeeResource, TeaResource]
});

let members = (await import(Deno.env().DENO_DRASH_DOCS_MEMBERS_PATH)).default;

members.test("response", async () => {

  let request = members.mockRequest("/coffee/17");
  let actual = await server.handleHttpRequest(request);
  // This test is failing because the tutorial does:
  //
  //     Deno.readFileSync("./coffee.json")
  //
  // The current working directory is being prepended to coffee.json like
  //
  //    /path/to/deno-drash-docs/coffee.json
  //
  members.assert.equals("test", members.decoder.decode(actual.body));
});
