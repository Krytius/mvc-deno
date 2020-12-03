import {opine} from "https://deno.land/x/opine@0.26.0/mod.ts";
import {Routers} from "./libs/Routers.ts";

export class Mvc {
    constructor() {
        let app = opine();
        let routers = new Routers(app);
        routers.start().then();
    }
}
