const Drash = (await import(Deno.env().DENO_DRASH)).default;
const members = (await import(Deno.env().DENO_DRASH_DOCS_MEMBERS)).default;

/**
 * Change the current working dir.
 */
function change(path) {
  let directory = Deno.env().DENO_DRASH_DOCS_PATH + path.replace("..", "");
  Deno.chdir(directory);
}

let test = "";

change("../src/example_code/advanced_tutorials/creating_an_api/coffee_and_tea/part_4");
import "../src/example_code/advanced_tutorials/creating_an_api/coffee_and_tea/test.ts";

members.runTests();
