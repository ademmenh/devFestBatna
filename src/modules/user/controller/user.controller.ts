
import { UserServices } from "../services/user.service"
import { successService, errorService } from '@utils/service'
import { successResponse, errorResponse } from "@utils/response"

import { Request, Response } from "express"


export const getUsers = async (req: Request, res: Response) => {
    const page = parseInt(req.params.page) || 1
    const limit = parseInt(req.params.page) || 12

    const result = await UserServices.getUsers(page, limit)
    if (result instanceof successService) return successResponse(res, result.code, result.message, result.data)
    if (result instanceof errorResponse) return errorResponse(res, result.code, result.errors, result.error)
}

export const banUser = async (req: Request, res: Response) => {
    const { id } = req.params
    
    const result = await UserServices.banUser(id)
    if (result instanceof successService) return successResponse(res, result.code, result.message, result.data);
    if (result instanceof errorService) return errorResponse(res, result.code, result.errors, result.error);
}

export const getMe = async (req: Request, res: Response) => {
    const {id} = req.params

    const result = await UserServices.getMe(id)
    if (result instanceof successService) return successResponse(res, result.code, result.message, result.data)
    if (result instanceof errorResponse) return errorResponse(res, result.code, result.errors, result.error)
}

export const updateMe = async (req: Request, res: Response) => {
    const id = (req.user?._id as string)
    const { name, lastname, birthday, gender } = req.body

    const result = await UserServices.updateMe(id, name, lastname, birthday, gender)
    if (result instanceof successService) return successResponse(res, result.code, result.message, result.data)
    if (result instanceof errorService) return errorResponse(res, result.code, result.errors, result.error)
}

export const deleteMe = async (req: Request, res: Response) => {
    const id = (req.user?._id as string)

    const result = await UserServices.deleteMe(id)
    if (result instanceof successService) return successResponse(res, result.code, result.message, result.data);
    if (result instanceof errorService) return errorResponse(res, result.code, result.errors, result.error);
}
