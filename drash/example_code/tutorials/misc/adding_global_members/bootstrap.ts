import { Drash } from "https://deno.land/x/drash@v1.2.5/mod.ts";

// Register MyThing as a global member
import myThing from "./my_thing.ts";
Drash.addMember("MyThing", new myThing());
