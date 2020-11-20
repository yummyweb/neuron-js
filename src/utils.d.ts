export function checkMiddlewareInputs(args: any): {
    path: string;
    handler: any;
};
export function matchPath(setupPath: any, currentPath: any): {
    matched: boolean;
    params: {};
} | {
    matched: boolean;
    params?: undefined;
};
