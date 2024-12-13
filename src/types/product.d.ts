
import { Schema } from 'mongoose'


export interface ProductI {
    title: string,
    description: string,
    price: number,
    userId: Schema.Types.ObjectId,
    userPhone: string,

}
