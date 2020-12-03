import {opine} from "https://deno.land/x/opine@0.26.0/mod.ts";
import {Routers} from "./libs/Routers.ts";

const app = opine();
const routers = new Routers(app);
routers.start().then();

