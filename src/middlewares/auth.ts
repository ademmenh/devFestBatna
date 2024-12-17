
import { User } from './../db/user'
import { Request, Response, NextFunction } from 'express'
import { Verify } from '../utils/jwt'
import { errorResponse } from '@utils/response'
import { httpLogs } from '@Types/logs/httpLogs'



export const isUser = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const token = req.cookies.token
        const {id, email, role} = Verify(token) as JwtPayload
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
        req.user = user
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

        const token = req.cookies.token
        const {id, email, role} = Verify(token) as JwtPayload
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
        req.user = user
        next()

    } catch (err) {
        return errorResponse(
            res,
            httpLogs.InternalServerError.code,
            [httpLogs.InternalServerError.message],

        )
    }
}
