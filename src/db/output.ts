
import { OutputI, OutputT } from '@Types/output'

import { Model, Schema, model, Types, Document } from 'mongoose'

export interface OutputD extends OutputI, Document {
    createdAt: Date,
    updatedAt: Date,
    toUser(): Partial<OutputI>
    
}

const OutputsS = new Schema<OutputT> ({
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
    
    },
    document: {
        required: false,
        type: String,
    
    },
},
{
    _id: false
})

const OutputS = new Schema<OutputI> ({
    userId: {
        required: true,
        type: Types.ObjectId,
        ref: 'User',

    },
    outputs: {
        required: true,
        type: OutputsS,

    },
    accessable: {
        required: false,
        type: Boolean,
        default: true,

    }
},
{
    timestamps: true,
})

OutputS.methods.toUser = function (): Partial<OutputI> {
    const obj: Partial<OutputI> = this.toObject()
    delete obj.accessable
    return obj

}

export const Output = model<OutputI, Model<OutputD>>('Output', OutputS)
