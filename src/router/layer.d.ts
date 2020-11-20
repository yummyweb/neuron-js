export default Layer;
declare class Layer {
    constructor(path: any, handler: any);
    handler: any;
    name: any;
    path: any;
    requestHandler(...args: any[]): any;
    match(path: any): {
        matched: boolean;
        params: {};
    } | {
        matched: boolean;
        params?: undefined;
    };
}
