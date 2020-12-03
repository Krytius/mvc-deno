import {exists, expandGlobSync} from "https://deno.land/std@0.79.0/fs/mod.ts";

export class Mvc {

    private app;
    private dir;

    constructor(app: any, dir: any) {
        this.app = app;
        this.dir = dir;
    }

    async start(port: number) {
        let path: string = this.dir.toString().concat('/controllers');
        if (exists(path)) {
            for (const file of expandGlobSync(path.concat("/**/*.ts"))) {
                let url: string = file.path.replace(path, '').replace('.ts', '').toLowerCase();
                let controller = await import('file:///'.concat(file.path));
                let keys = Object.keys(controller);
                let ctr = new controller[keys[0]]();

                let middleware = (req: any, res: any, next: any) => {
                    next();
                };
                if (typeof ctr.middleware === "function") {
                    middleware = ctr.middleware;
                }

                if (typeof ctr.get === 'function') {
                    console.log(`GET: ${url}`);
                    this.app.get(url, middleware, ctr.get);
                }

                if (typeof ctr.getItem === 'function') {
                    console.log(`GET: ${url.concat('/:id')}`);
                    this.app.get(url.concat('/:id'), middleware, ctr.getItem);
                }

                if (typeof ctr.post === 'function') {
                    console.log(`POST: ${url}`);
                    this.app.post(url, middleware, ctr.post);
                }

                if (typeof ctr.delete === 'function') {
                    console.log(`DELETE: ${url.concat('/:id')}`);
                    this.app.delete(url.concat('/:id'), middleware, ctr.delete);
                }

                if (typeof ctr.put === 'function') {
                    console.log(`PUT: ${url.concat('/:id')}`);
                    this.app.put(url.concat('/:id'), middleware, ctr.put);
                }
            }
        }

        console.log(`Service run port: ${port}`);
        this.app.listen(port);
    }
}
