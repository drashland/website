const Drash = (await import(Deno.env().DENO_DRASH)).default;
const members = (await import(Deno.env().DENO_DRASH_DOCS_MEMBERS)).default;

import response from "./part_4/response.ts";
Drash.Http.Response = response;

import CoffeeResource from "./part_4/coffee_resource.ts";
import TeaResource from "./part_4/tea_resource.ts";

let server = new Drash.Http.Server({
  resources: [CoffeeResource, TeaResource]
});

members.test("Advanced Tutorials - Creating An API (coffee_and_tea) - responses", async () => {
  let request;
  let actual;

  request = members.mockRequest("/coffee/17");
  actual = await server.handleHttpRequest(request);
  members.assert.responseJsonEquals(
    actual.body,
    {
      status_code: 200,
      status_message: "OK",
      data: {
        id: 17,
        name: "Light Roast: Breakfast Blend",
        price: 2.25
      },
      request: {
        method: "GET",
        uri: "/coffee/17"
      }
    }
  );

  request = members.mockRequest("/coffee/15");
  actual = await server.handleHttpRequest(request);
  members.assert.responseJsonEquals(
    actual.body,
    {
      status_code: 404,
      status_message: "Not Found",
      data: "Coffee with ID \"15\" not found.",
      request: {
        method: "GET",
        uri: "/coffee/15"
      }
    }
  );
});
