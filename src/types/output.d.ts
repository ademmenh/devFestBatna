
import { Schema } from 'mongoose'


declare interface OutputT {
    text?: string
    image?: string
    video?: string
    audio?: string
    document?: string

}

declare interface OutputI {
    userId: Schema.Types.ObjectId
    outputs: OutputT
    accessable: boolean
    createdAt: Date
    updatedAt: Date

}
