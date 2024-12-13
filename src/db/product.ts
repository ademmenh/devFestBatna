
import { ProductI } from '@/types/product'

import { Model, Schema, model, Types } from 'mongoose'
import bcrypt from 'bcrypt'

interface ProductD extends ProductI, Document {
    createdAt: Date,
    updatedAt: Date,
    
}

const ProductS = new Schema<ProductI> ({
    title: {
        required: true,
        type: String,

    },
    description: {
        required: true,
        type: String,
    },
    price: {
        required: true,
        type: Number,
    },
    userId: {
        required: true,
        type: Types.ObjectId,
        ref: 'User',
    },
    userPhone: {
        required: true,
        type: String,
    },

},
{
    timestamps: true,
})


export const Product = model<ProductI, Model<ProductD>>('Product', ProductS)
