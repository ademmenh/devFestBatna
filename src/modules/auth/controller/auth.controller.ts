
import { errorResponse, successResponse } from '@/utils/response'
import { errorService, successService } from '@/utils/service'
import { authService } from '../services/auth.service'

import { Request, Response } from 'express'



export const SignIn = async (req: Request, res: Response) => {

    const {email, password} = req.body
    const result = await authService.SignIn(email, password)

    if (result instanceof successService) return successResponse(res, result.code, result.message, result.data)
    if (result instanceof errorService) return errorResponse(res, result.code, result.errors, result.error )
}

export const SignUp = async (req: Request, res: Response) => {

    const {name, lastname, birthday, gender, email, password} = req.body
    const result = await authService.SignUp(name, lastname, birthday, gender, email, password)

    if (result instanceof successService) return successResponse(res, result.code, result.message, result.data)
    if (result instanceof errorService) return errorResponse(res, result.code, result.errors, result.error )
}
