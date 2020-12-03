import {exists, expandGlobSync} from "https://deno.land/std@0.79.0/fs/mod.ts";

export class Routers {

    private app;

    constructor(app: any) {
        this.app = app;
    }

    async start() {
        let path: string = Deno.cwd().toString().concat('/controllers');
        if (exists(path)) {
            for (const file of expandGlobSync(path.concat("/**/*.ts"))) {
                let url: string = file.path.replace(path, '').replace('.ts', '').toLowerCase();
                let controller = await import(file.path);
                let keys = Object.keys(controller);
                let ctr = new controller[keys[0]]();

                if(typeof ctr.get === 'function') {
                    this.app.get(url, ctr.get);
                }

                if(typeof ctr.getItem === 'function') {
                    this.app.get(url.concat('/:id'), ctr.getItem);
                }

                if(typeof ctr.post === 'function') {
                    this.app.post(url, ctr.post);
                }

                if(typeof ctr.delete === 'function') {
                    this.app.delete(url, ctr.delete);
                }

                if(typeof ctr.put === 'function') {
                    this.app.put(url, ctr.put);
                }
            }
        }

        this.app.listen(3000);
    }
}
