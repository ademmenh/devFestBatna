
import { Model, Schema, model, Document } from 'mongoose'

import { NodeI, VectorI, WorkflowI } from '@Types/workflow' 

interface WorkflowD extends WorkflowI, Document {
    createdAt: Date,
    updatedAt: Date,
    
}

const NodeS = new Schema <NodeI> ({
    data: {
        label: {
            type: String,
            required: true,
        },
    },
    position: {
        x: {
          type: Number,
          required: true
        },
        y: {
          type: Number,
          required: true
        }
    },
})

const VectorI = new Schema <VectorI> ({
    prev: {
        type: Number,
        required: false,

    },
    next: {
        type: Number,
        required: false,

    }

})

const WorkflowS = new Schema <WorkflowI> ({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
        
    },
    name: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: false,
        default: '',
        
    },
    nodes: {
        type: [NodeS],
        required: false,

    },
    vectors: {
        type: [VectorI],
        required: false,

    }
})

export const Workflow = model<WorkflowI, Model<WorkflowD>>('Workflow', WorkflowS)
