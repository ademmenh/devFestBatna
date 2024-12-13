
import { Types } from 'mongoose'

interface JwtPayload {
    id: Types.ObjectId,
    email: string,
    role: string,

}
