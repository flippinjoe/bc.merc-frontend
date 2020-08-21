import { MongoObject } from "./mongo";


export enum PlatformName {
    android = "android",
    ios = "ios",
    mac = "macos",
    tvos = "tvos"
}

export interface ProjectPlatform {
    name: PlatformName
    tags: string[]
}

export default interface Project extends MongoObject {
    name: string
    key: string
    organization: string
    platforms: ProjectPlatform[]
}