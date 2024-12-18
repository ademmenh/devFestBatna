
import { Schema } from 'mongoose'

export enum nodesLables {
    'upload image',
    'chatgpt',
    'scheduler',
    'email'

}

declare interface NodeI {
    data: {
        label: string
    }
    position: {
        x: number
        y: number
    }
}

declare interface VectorI {
    prev: number | null
    next: number | null

}

declare interface WorkflowI {
    userId: Schema.Types.ObjectId
    name: string
    description: string
    nodes: NodeI[]
    vectors: VectorI[]
    createdAt: Date
    updatedAt: Date
    
}
