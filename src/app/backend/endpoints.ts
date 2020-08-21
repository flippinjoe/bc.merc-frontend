
import { Request, HTTPMethod } from './types'
import Organization from '../types/Organization'
import Project from '../types/Project'




const Requests = {
    
    orgs: {
        list: new Request<[Organization]>(HTTPMethod.get, "v1/organizations")
    }

    // customAuth: new Request<AuthResponse>(HTTPMethod.post, "v1/auth/custom"),
    // themes: {
    //     list: new Request<[Theme]>(HTTPMethod.get, "v1/themes"),
    //     create: new Request<void>(HTTPMethod.post, `v1/themes`),
    //     delete: (id: string) => new Request<void>(HTTPMethod.delete, `v1/themes/${id}`),
    //     update: (id: string) => new Request<Theme>(HTTPMethod.patch, `v1/themes/${id}`),
    //     view: (id: string) => new Request<Theme>(HTTPMethod.get, `v1/themes/${id}`)
    // },
    // stories: {
    //     list: new Request<[Story]>(HTTPMethod.get, `v1/stories`)
    // },
    // users: {
    //     me: new Request<User>(HTTPMethod.get, "v1/auth/me"),
    //     list: new Request<[User]>(HTTPMethod.get, "v1/users"),
    //     get: (id: string) => new Request<User>(HTTPMethod.get, `v1/users/${id}`),
    //     update: (id: string) => new Request<void>(HTTPMethod.patch, `v1/users/${id}`)
    // },
    // reporting: {
    //     stories: new Request<[Story]>(HTTPMethod.get, `v1/reporting/stories`)
    // }
}
