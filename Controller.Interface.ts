interface ControllerInterface {
    get(req: any, res: any): any;
    getItem(req: any, res: any): any;
    post(req: any, res: any): any;
    delete(req: any, res: any): any;
    put(req: any, res: any): any;
}

export type { ControllerInterface }
