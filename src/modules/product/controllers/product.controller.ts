import { ProcutServices } from "../services/product.service"
import { successService, errorService } from '@/utils/service'
import { successResponse, errorResponse } from "@/utils/response"

import { Request, Response } from "express"


export const getProducts = async (req: Request, res: Response) => {
    const page = parseInt(req.params.page) || 1
    const limit = parseInt(req.params.limit) || 12

    const result = await ProcutServices.getProducts(page, limit)

    if (result instanceof successService) return successResponse(res, result.code, result.message, result.data)
    if (result instanceof errorResponse) return errorResponse(res, result.code, result.errors, result.error)
}

export const getProduct = async (req: Request, res: Response) => {
    const userId = req.params.id

    const result = await ProcutServices.getProduct(userId)

    if (result instanceof successService) return successResponse(res, result.code, result.message, result.data)
    if (result instanceof errorResponse) return errorResponse(res, result.code, result.errors, result.error)
}

export const updateProducts = async (req: Request, res: Response) => {
    const {id} = req.params
    const userData = req.body

    const result = await ProcutServices.updateProduct(id, userData)

    if (result instanceof successService) return successResponse(res, result.code, result.message, result.data)
    if (result instanceof errorService) return errorResponse(res, result.code, result.errors, result.error)
}

export const deleteProducts = async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await ProcutServices.deleteProduct(id);

    if (result instanceof successService) return successResponse(res, result.code, result.message, result.data);
    if (result instanceof errorService) return errorResponse(res, result.code, result.errors, result.error);
}
