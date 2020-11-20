export default Neuron;
declare function Neuron(): {
    use: (...args: any[]) => void;
    listen: (port: any, cb: any) => any;
    GET: (...args: any[]) => Router;
    POST: (...args: any[]) => Router;
    DELETE: (...args: any[]) => Router;
    PUT: (...args: any[]) => Router;
    configureView: (templatedDir: any) => void;
    view: (templateName: any, ctx: any, cb: any) => void;
};
import Router from "./router/router.js";
