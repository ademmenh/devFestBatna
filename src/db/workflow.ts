
import { Model, Schema, model, Types } from 'mongoose'

import { WorkflowI } from '@/types/workflow' 

interface WorkflowD extends WorkflowI, Document {
    createdAt: Date,
    updatedAt: Date,
    
}

const WorkflowS = new Schema <WorkflowI> ({
    data: {
        label: {
            type: String,
            required: true,    
        },
        prompt: {
            type: String,
            required: false,
        }
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
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,

    },
    type: {
        type: String,
        required: true
    },
},
{
    timestamps: true
})


export const Workflow = model<WorkflowI, Model<WorkflowD>>('User', WorkflowS)
