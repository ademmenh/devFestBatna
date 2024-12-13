
import { Types } from 'mongoose'

declare interface WorkflowI {
    data: {
        name: string
        prompt: String
    }
    position: {
        x: number
        y: number
    }
    userId: Types.ObjectId
    type: string
}
