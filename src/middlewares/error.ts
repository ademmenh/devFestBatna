
import { httpLogs } from "@logs/http"

import { Request, Response } from 'express'

import { errorResponse } from "@utils/response"


export const errorMiddleWare = ((err: Error, req: Request, res: Response) => {
    return errorResponse (
                res,
                httpLogs.InternalServerError.code,
                [httpLogs.InternalServerError.message],
                err
            )
})
