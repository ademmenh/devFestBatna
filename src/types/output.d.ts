
import { Schema } from 'mongoose'


declare interface OutputI {
    userId: Schema.Types.ObjectId,
    text?: string,
    image?: string,
    video?: string,
    audio?: string,
    document?: string,
    createdAt: Date,
    updatedAt: Date,

}
