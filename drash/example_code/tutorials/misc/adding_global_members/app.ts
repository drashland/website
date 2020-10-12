import { Drash } from "https://deno.land/x/drash@v1.2.5/mod.ts";

// When this file is imported, it will register MyThing as a global member
import "./bootstrap.ts";

console.log(Drash.Members.MyThing.greet());
