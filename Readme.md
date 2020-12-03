## Deno MVC API Simple

![GitHub release](https://img.shields.io/github/release/Krytius/mvc-deno.svg)
![(Deno)](https://img.shields.io/badge/deno-1.5.4-green.svg)

### Example Start Proccess

#### main.ts

```ts
import {opine} from "https://deno.land/x/opine@0.26.0/mod.ts";
import {Mvc} from "https://deno.land/x/mvc@v0.0.7/mod.ts";

let app = opine();
let mvc = new Mvc(app, Deno.cwd());
await mvc.start(3000);
```

Automatically creates routes for everything inside the controller folder.
Example:

    .
    ├── controller
    │   ├── game.ts
    ├── main.ts

#### game.ts

Controller Structure:

```ts
import {ControllerInterface} from "https://deno.land/x/mvc@v0.0.8/mod.ts";

export class Game implements ControllerInterface {

    middleware(req: any, res: any, next: any) {
        next();
    };

    /**
     * METHOD GET
     * @param req
     * @param res
     */
    get(req: any, res: any) {
        res.send(req.url);
    }

    /**
     * METHOD GET /:id
     * @param req
     * @param res
     */
    getItem(req: any, res: any) {
        throw new Error("Method not implemented.");
    }

    /**
     * METHOD POST
     * @param req
     * @param res
     */
    post(req: any, res: any) {
        throw new Error("Method not implemented.");
    }

    /**
     * METHOD DELETE
     * @param req
     * @param res
     */
    delete(req: any, res: any) {
        throw new Error("Method not implemented.");
    }

    /**
     * METHOD PUT
     * @param req
     * @param res
     */
    put(req: any, res: any) {
        throw new Error("Method not implemented.");
    }

}
```

In this case, the following routes were created:

    GET     /game
    GET     /game/:id
    POST    /game
    PUT     /game/:id
    DELETE  /game/:id

All routes are created in lower case.


#### Middleware

The middleware attribute of the class is a reserved attribute. If it is a public api, just make the attribute null.

```ts
import {ControllerInterface} from "https://deno.land/x/mvc@v0.0.8/mod.ts";

export class Game implements ControllerInterface {
    
    middleware = null;
    
    ...
}
```
