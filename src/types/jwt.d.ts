
import { Types } from 'mongoose'

declare interface JwtUserPayload {
    id: Types.ObjectId,
    email: string,

}

declare interface JwtAdminPayload {
    id: Types.ObjectId,
    isAdmin: boolean,

}

type JwtPayload = JwtAdminPayload | JwtUserPayload
