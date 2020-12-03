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
        console.log(path);
        if (exists(path)) {
            for (const file of expandGlobSync(path.concat("/**/*.ts"))) {
                let url: string = file.path.replace(path, '').replace('.ts', '').toLowerCase();
                console.log(file.path);
                let controller = await import(file.path);
                let keys = Object.keys(controller);
                let ctr = new controller[keys[0]]();

                let middleware = (req: any, res: any, next: any) => {
                    next();
                };
                if (typeof ctr.middleware === "function") {
                    middleware = ctr.middleware;
                }

                if (typeof ctr.get === 'function') {
                    this.app.get(url, middleware, ctr.get);
                }

                if (typeof ctr.getItem === 'function') {
                    this.app.get(url.concat('/:id'), middleware, ctr.getItem);
                }

                if (typeof ctr.post === 'function') {
                    this.app.post(url, middleware, ctr.post);
                }

                if (typeof ctr.delete === 'function') {
                    this.app.delete(url, middleware, ctr.delete);
                }

                if (typeof ctr.put === 'function') {
                    this.app.put(url, middleware, ctr.put);
                }
            }
        }

        console.log(`Service run port: ${port}`);
        this.app.listen(port);
    }
}
