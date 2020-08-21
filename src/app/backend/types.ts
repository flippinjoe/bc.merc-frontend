export enum HTTPMethod {
    get = "GET",
    put = "PUT",
    patch = "PATCH",
    post = "POST",
    delete = "DELETE"
}

export class Request<T> {
    method: HTTPMethod
    path: string

    constructor(method: HTTPMethod, path: string) {
        this.method = method
        this.path = path
    }
}