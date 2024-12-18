
import { Schema } from 'mongoose'

declare interface WorkflowI {
    userId: Schema.Types.ObjectId
    data: {
        name: string
        prompt: String
    }
    position: {
        x: number
        y: number
    }
    type: string,
    createdAt: Date,
    updatedAt: Date,
    
}
