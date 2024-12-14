
import { httpLogs } from "@Types/logs/httpLogs"

import { Request, Response, NextFunction } from 'express'

import { errorResponse } from "@utils/response"


export const errorMiddleWare = ((err: Error, req: Request, res: Response, next: NextFunction) => {
    return errorResponse (
                res,
                httpLogs.InternalServerError.code,
                [httpLogs.InternalServerError.message],
                err
            )
})
