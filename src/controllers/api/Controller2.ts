import {ControllerInterface} from "../../libs/Controller.Interface.ts";

export class Controller2 implements ControllerInterface {

    constructor() {
    }

    get(req: any, res: any) {
        res.send(req.url);
    }

    delete(req: any, res: any): any {
    }

    getItem(req: any, res: any): any {
        res.send(req.url);
    }

    post(req: any, res: any): any {
    }

    put(req: any, res: any): any {
    }

}
