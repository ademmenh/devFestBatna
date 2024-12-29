
import { Model, Schema, model, Document } from 'mongoose'


import bcrypt from 'bcrypt'


export interface UserD extends UserI, Document {
    createdAt: Date,
    updatedAt: Date,
    passwordMatches(password: string): Promise<Boolean>
    toResponse(): Partial<UserI>
    
}

const UserS = new Schema <UserI> ({
    name: {
        type: String,
        required: true,

    },
    lastname: {
        type: String,
        required: true,

    },
    birthday: {
        type: Date,
        required: true,

    },
    gender: {
        type: String,
        required: true,

    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',

    },
    email: {
        type: String,
        required: true,
        unique: true,

    },
    password: {
        type: String,
        required: true,
    },
    banned: {
        type: Boolean,
        required: false,
    
    },
    deleted: {
        type: Boolean,
        required: false
    }
},
{
    timestamps: true
})

UserS.methods.passwordMatches = async function (password: string): Promise<Boolean> {
    return await bcrypt.compare(password, this.password)
}

UserS.methods.toResponse = function (): Partial<UserI> {
    const obj = this.toObject()
    delete obj.password
    delete obj.banned
    return obj

}

// TODO: toUser

UserS.pre('save', async function (next) {
    try {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash((this.password as string), salt)
        next()

    } catch (err) {
        console.log(err)
        next((err as Error))

    }
})

export const User = model<UserI, Model<UserD>>('User', UserS)
