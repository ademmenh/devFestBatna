
// import { httpLogs } from '@logs/http'
import { httpLogs } from "@/logs/http"

import { Request, Response } from 'express'


export const errorMiddleWare = ((err: Error, req: Request, res: Response) => {
    res.status(500).json({message: 'Internal Server Error'})
})
