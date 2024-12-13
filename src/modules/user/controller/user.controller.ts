import { UserServices } from "../services/user.service"
import { successService, errorService } from '@/utils/service'
import { successResponse, errorResponse } from "@/utils/response"

import { Request, Response } from "express"


export const getUsers = async (req: Request, res: Response) => {
    const page = parseInt(req.params.page) || 1
    const limit = parseInt(req.params.page) || 12


    const result = await UserServices.GetUsers(page, limit)

    if (result instanceof successService) return successResponse(res, result.code, result.message, result.data)
    if (result instanceof errorResponse) return errorResponse(res, result.code, result.errors, result.error)
}

export const getUser = async (req: Request, res: Response) => {
    const {id} = req.params

    const result = await UserServices.GetUser(id)

    if (result instanceof successService) return successResponse(res, result.code, result.message, result.data)
    if (result instanceof errorResponse) return errorResponse(res, result.code, result.errors, result.error)
}

export const updateUser = async (req: Request, res: Response) => {
    const {id} = req.params
    const userData = req.body

    const result = await UserServices.UpdateUser(id, userData)

    if (result instanceof successService) return successResponse(res, result.code, result.message, result.data)
    if (result instanceof errorService) return errorResponse(res, result.code, result.errors, result.error)
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await UserServices.DeleteUser(id);

    if (result instanceof successService) return successResponse(res, result.code, result.message, result.data);
    if (result instanceof errorService) return errorResponse(res, result.code, result.errors, result.error);
}
