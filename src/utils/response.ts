

import { httpLogs } from '@/logs/http'
import mongoose from 'mongoose'
import { Response } from 'express'


export const successResponse = (res: Response, code: number, message: string, data: unknown): void => {
    const body: successResponseI = {
        status: 'success',
        message,
        data,

    }
    res.status(httpLogs.OK.code).json(body)
}


export const errorResponse = (res: Response, code: number, errors: string[], error: unknown) => {
    let body: errorResponseI
    if ( error instanceof mongoose.mongo.MongoServerError && error.code === 11000 ) {
        body = {
            status: 'error',
            errors: ['Not allowed to have a duplicated keys.'],
        }

        res.status(code).json(body)
    }

    body = {
        status: 'error',
        errors,
    }

    res.status(httpLogs.InternalServerError.code).json(body)
}
