export default Route;
declare class Route {
    constructor(path: any);
    path: any;
    stack: any[];
    methods: {};
    requestHandler(method: any): boolean;
    get(handler: any): Route;
    post(handler: any): Route;
    delete(handler: any): Route;
    put(handler: any): Route;
    dispatch(req: any, res: any): void;
}
