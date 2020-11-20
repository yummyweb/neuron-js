export default Router;
declare class Router {
    stack: Layer[];
    handle(req: any, res: any): any;
    route(path: any): Route;
    get(path: any, handler: any): Router;
    post(path: any, handler: any): Router;
    delete(path: any, handler: any): Router;
    put(path: any, handler: any): Router;
}
import Layer from "./layer.js";
import Route from "./route.js";
