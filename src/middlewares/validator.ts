
import { Request, Response, NextFunction} from 'express'
import { validationResult } from 'express-validator'
import { httpLogs } from '@Types/logs/httpLogs'
import { errorResponse } from '@utils/response'

export const validator = (req: Request, res: Response, next: NextFunction): void => {
    const errors = validationResult(req)
    console.log(errors)
    if (!errors.isEmpty()){

        return errorResponse (
            res,
            httpLogs.BadRequest.code,
            [httpLogs.BadRequest.message],
        )
    }
    next();
}
