import {opine} from "https://deno.land/x/opine@0.26.0/mod.ts";
import {Routers} from "./libs/Routers.ts";

export class Mvc {
    constructor(dir: any, port: number) {
        let app = opine();
        let routers = new Routers(app, dir);
        routers.start(port).then();
    }
}
