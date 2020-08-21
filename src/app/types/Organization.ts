
import User from './User'
import { MongoObject } from './mongo';

export interface Organization extends MongoObject {
    name: string
    owners: User[]|string[]
    users: User[]|string[]
}