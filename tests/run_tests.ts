import members from "./members.ts";

let dir = "";
let fullDir = "";

dir = "/src/example_code/advanced_tutorials/creating_an_api/coffee_and_tea";
fullDir = Deno.env().DENO_DRASH_DOCS_PATH + dir;
Deno.chdir(fullDir + "/part_4");
console.log("currently testing:" +  Deno.cwd());
import "../src/example_code/advanced_tutorials/creating_an_api/coffee_and_tea/tests.ts";

members.runTests();
