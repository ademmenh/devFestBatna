
import { User } from './../db/user'
import { Request, Response, NextFunction } from 'express'
import { Verify } from '../utils/jwt'
import { errorResponse, successResponse } from '@/utils/response'
import { httpLogs } from '@/logs/http'
import { exit } from 'process'
import { exitLogs } from '@/logs/exit'
import { JwtPayload } from '@/types/jwt'



export const isUser = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const authHeader = req.headers.authorization
        if (!authHeader) {
            return errorResponse(
                res,
                httpLogs.Unauthorized.code,
                [httpLogs.Unauthorized.message],

            )
        }

        const [bearer, token] = authHeader.split(' ')
        if (!bearer || !token) {
            return errorResponse(
                res,
                httpLogs.Unauthorized.code,
                [httpLogs.Unauthorized.message],

            )
        }
        
        if (bearer !== 'Bearer') {
            return errorResponse(
                res,
                httpLogs.Unauthorized.code,
                [httpLogs.Unauthorized.message],

            )
        }


        const {id, email, role} = await Verify(token) as JwtPayload
        // TODO: log a warning
        if (!id || !email || !role) {
            return errorResponse(
                res,
                httpLogs.Unauthorized.code,
                [httpLogs.Unauthorized.message],

            )
        }

        const user = await User.findById(id)
        // TODO: log a warning
        if (!user) {
            return errorResponse(
                res,
                httpLogs.Unauthorized.code,
                [httpLogs.Unauthorized.message],

            )

        }
        (req as any).user = user
        next()

    } catch (err) {
        console.log(err)
        return errorResponse(
            res,
            httpLogs.Unauthorized.code,
            [httpLogs.Unauthorized.message],

        )
    }
}


export const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
    
    try {

        const authHeader = req.headers.authorization
        if (!authHeader) {
            res.status(403).json({status: "Unprocessable Content"})
            return
        }

        const [bearer, token] = authHeader.split(' ')
        if (!bearer || !token) {
            res.status(403).json({status: "Unauthorized"})
            return
        }

        if (bearer !== 'Bearer') {
            res.status(403).json({status: "Unauthorized"})
            return
        }

        const {id, email, role} = await Verify(token) as JwtPayload
        // TODO: log a warning
        if (!id || !email || !role) {
            return errorResponse(
                res,
                httpLogs.Unauthorized.code,
                [httpLogs.Unauthorized.message],

            )
        }

        // TODO: log a warning
        const user = await User.findById(id)
        if (!user) {
            return errorResponse(
                res,
                httpLogs.Unauthorized.code,
                [httpLogs.Unauthorized.message],

            )
        }
        (req as any).user = user

        next()

    } catch (err) {
        return errorResponse(
            res,
            httpLogs.InternalServerError.code,
            [httpLogs.InternalServerError.message],

        )
    }
}
