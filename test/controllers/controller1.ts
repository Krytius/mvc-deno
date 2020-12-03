import {ControllerInterface} from "../../interfaces.ts";

export class Controller1 implements ControllerInterface {

    middleware(req: any, res: any, next: any) {
        console.log('AQUI');
        next();
    }

    delete(req: any, res: any): any {
    }

    get(req: any, res: any): any {
        console.log(req.url)
    }

    getItem(req: any, res: any): any {
    }

    post(req: any, res: any): any {
    }

    put(req: any, res: any): any {
    }

}
