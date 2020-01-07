let directory = "/src/example_code/advanced_tutorials/creating_an_api/coffee_and_tea/part_4";

let members = (await import(Deno.env().DENO_DRASH_DOCS_PATH + "/tests/members.ts")).default;

delete Deno.readFileSync;

Object.defineProperty(Deno, "readFileSync", {
  value: (filename: string) => {
    return members.reader(directory + filename);
  },
  configurable: true
});

let Drash = (await import(Deno.env().DENO_DRASH)).default;

let response = (await import(Deno.env().DENO_DRASH_DOCS_PATH + directory + "/response.ts")).default;
Drash.Http.Response = response;

let CoffeeResource = (await import(Deno.env().DENO_DRASH_DOCS_PATH + directory + "/coffee_resource.ts")).default;
let TeaResource = (await import(Deno.env().DENO_DRASH_DOCS_PATH + directory + "/tea_resource.ts")).default;

let server = new Drash.Http.Server({
  resources: [CoffeeResource, TeaResource]
});


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

