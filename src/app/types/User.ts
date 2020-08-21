import { MongoObject } from "./mongo";


export enum Role {
    super = "super",
    default = "default"
}

export default interface User extends MongoObject {
    username: string
    email: string
    firstName: string
    lastName: string
    role: Role
}