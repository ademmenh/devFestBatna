
import { UserD } from '@db/user'
import { OutputServices } from "../services/output.service"
import { successService, errorService } from '@utils/service'
import { successResponse, errorResponse } from "@utils/response"


import { Request, Response } from "express"


export const getOutputs = async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1
    const limit = parseInt(req.query.limit as string) || 12
    const userId = (req.user as UserD)._id as string

    const result = await OutputServices.getOutputs(userId, page, limit)

    if (result instanceof successService) return successResponse(res, result.code, result.message, result.data)
    if (result instanceof errorService) return errorResponse(res, result.code, result.errors, result.error)
}

export const getOutput = async (req: Request, res: Response) => {
    const productId = req.params.id
    const userId = ( req.user as UserD)._id as string

    const result = await OutputServices.getOutput(userId, productId)

    if (result instanceof successService) return successResponse(res, result.code, result.message, result.data)
    if (result instanceof errorService) return errorResponse(res, result.code, result.errors, result.error)
}

export const createOutput = async (req: Request, res: Response) => {
    const {outputs} = req.body
    const userId = (req.user as UserD)._id as string

    const result = await OutputServices.createOutput(userId, outputs)

    if (result instanceof successService) return successResponse(res, result.code, result.message, result.data)
    if (result instanceof errorService) return errorResponse(res, result.code, result.errors, result.error)
}

export const deleteOutput = async (req: Request, res: Response) => {
    const outputId = req.params.id
    const userId = (req.user as UserD)._id as string

    const result = await OutputServices.deleteOutput(userId, outputId);

    if (result instanceof successService) return successResponse(res, result.code, result.message, result.data);
    if (result instanceof errorService) return errorResponse(res, result.code, result.errors, result.error);
}
