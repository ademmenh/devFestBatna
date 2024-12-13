
import mongoose from 'mongoose'


export interface ProductI {
    title: string,
    description: string,
    price: number,
    userId: Types.ObjectId,
    userPhone: string,

}
