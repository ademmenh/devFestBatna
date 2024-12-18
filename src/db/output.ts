
import { OutputI } from '@Types/output'

import { Model, Schema, model, Types, Document } from 'mongoose'

interface OutputD extends OutputI, Document {
    createdAt: Date,
    updatedAt: Date,
    
}

const OutputS = new Schema<OutputI> ({
    userId: {
        required: true,
        type: Types.ObjectId,
        ref: 'User',
    },
    text: {
        required: false,
        type: String,

    },
    image: {
        required: false,
        type: String,

    },
    video: {
        required: false,
        type: String,
        
    },
    audio: {
        required: false,
        type: String,

    }

},
{
    timestamps: true,
})


export const Output = model<OutputI, Model<OutputD>>('Output', OutputS)
