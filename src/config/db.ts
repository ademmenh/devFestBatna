
import { DB_URI } from './vars'

import { successLogs } from '@/logs/success'
import { exitLogs } from '@/logs/exit'

import mongoose from 'mongoose'



export const dbConfig = async (): Promise<Boolean> => {

    try {
        console.log('Connecting to DataBase...')
        await mongoose.connect(DB_URI)
        console.log(successLogs.SUCCESS_DATABASE_CONNECTED.message)
        
        return true
    } catch (err) {
        console.log(exitLogs.ERROR_DATABASE_CONNECTION)
        console.log('error: ', err)

        return false
    }
}

export const dbDisconnect = async () => {
    mongoose.disconnect()
}
