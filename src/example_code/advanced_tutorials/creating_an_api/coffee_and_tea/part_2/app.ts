import Drash from "https://deno.land/x/drash/mod.ts";

// import CoffeeResource from "./coffee_resource.ts";
// import TeaResource from "./tea_resource.ts";

let server = new Drash.Http.Server({
  address: "localhost:1447",
  response_output: "application/json",
  resources: [
    // CoffeeResource,
    // TeaResource
  ],
});

server.run();
