
import { httpLogs } from "@logs/http"

import { Request, Response } from 'express'


export const errorMiddleWare = ((err: Error, req: Request, res: Response) => {
    res.status(httpLogs.InternalServerError.code)
    .json({message: httpLogs.InternalServerError.message})
})
