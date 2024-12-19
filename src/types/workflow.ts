
import { Schema } from 'mongoose'



export interface NodeI {
    data: {
        label: string
    }
    position: {
        x: number
        y: number
    }
}

export interface VectorI {
    prev: number | null
    next: number | null

}

export interface WorkflowI {
    userId: Schema.Types.ObjectId
    name: string
    description: string
    nodes: NodeI[]
    vectors: VectorI[]
    createdAt: Date
    updatedAt: Date
    
}
