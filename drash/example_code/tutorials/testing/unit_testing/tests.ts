import { assertEquals } from "https://deno.land/std@v0.62.0/testing/asserts.ts";
import { Drash } from "https://deno.land/x/drash@v1.x/mod.ts";
import HomeResource from "./home_resource.ts";
import OrdersResource from "./orders_resource.ts";
import UsersResource from "./users_resource.ts";

const server = new Drash.Http.Server({
  response_output: "application/json",
  resources: [
      HomeResource,
      UsersResource,
      OrdersResource
  ]
});
const httpOptions = {
  hostname: "localhost",
  port: 1447
};

Deno.test({
  name: "HomeResource - GET /",
  async fn(): Promise<void> {
    await server.run(httpOptions);
    const response = await fetch("http://localhost:1447", {
      method: "GET",
    });
    assertEquals(JSON.parse(await response.text()), "Welcome home!");
    server.close()
  }
});

Deno.test({
  name: "UsersResource - GET /users/1",
  async fn(): Promise<void> {
    await server.run(httpOptions);
    const response = await fetch("http://localhost:1447/users/1", {
      method: "GET",
    });
    assertEquals(JSON.parse(await response.text()), "User #1 not found.");
    server.close()
  }
});

Deno.test({
  name: "UsersResource - GET /users/1388873",
  async fn(): Promise<void> {
    await server.run(httpOptions);
    const response = await fetch("http://localhost:1447/users/1388873", {
      method: "GET",
    });
    assertEquals(JSON.parse(await response.text()), {
      id: 1388873,
      name: "Seller",
    });
    await server.close();
  }
});

Deno.test({
  name: "UsersResource - GET /users/1983765",
  async fn(): Promise<void> {
    await server.run(httpOptions);
    const response = await fetch("http://localhost:1447/users/1983765", {
      method: "GET",
    });
    assertEquals(JSON.parse(await response.text()), {
      id: 1983765,
      name: "Buyer",
    });
    server.close()
  }
});

Deno.test({
  name: "OrdersResource - GET /orders/1",
  async fn(): Promise<void> {
    await server.run(httpOptions);
    const response = await fetch("http://localhost:1447/orders/1", {
      method: "GET",
    });
    assertEquals(JSON.parse(await response.text()), "Order #1 not found.");
    server.close()
  }
});

Deno.test({
  name: "OrdersResource - GET /orders/1090987",
  async fn(): Promise<void> {
    await server.run(httpOptions);
    const response = await fetch("http://localhost:1447/orders/1090987", {
      method: "GET",
    });
    assertEquals(JSON.parse(await response.text()), {
      id: 1090987,
      name: "Gadgets",
      quantity: 50,
      price: 1000
    });
    server.close()
  }
});

Deno.test({
  name: "OrdersResource - GET /orders/8878213",
  async fn(): Promise<void> {
    await server.run(httpOptions);
    const response = await fetch("http://localhost:1447/orders/8878213", {
      method: "GET",
    });
    assertEquals(JSON.parse(await response.text()), {
      id: 8878213,
      name: "Gizmos",
      quantity: 25,
      price: 2000
    });
    server.close()
  }
});
