import { UserD } from '@db/user'
import { ProcutServices } from "../services/product.service"
import { successService, errorService } from '@utils/service'
import { successResponse, errorResponse } from "@utils/response"


import { Request, Response } from "express"


export const getProducts = async (req: Request, res: Response) => {
    const page = parseInt(req.params.page) || 1
    const limit = parseInt(req.params.limit) || 12
    const userId = (req.user as UserD)._id as string

    const result = await ProcutServices.getProducts(userId, page, limit)

    if (result instanceof successService) return successResponse(res, result.code, result.message, result.data)
    if (result instanceof errorResponse) return errorResponse(res, result.code, result.errors, result.error)
}

export const getProduct = async (req: Request, res: Response) => {
    const productId = req.params.id
    const userId = ( req.user as UserD)._id as string

    const result = await ProcutServices.getProduct(userId, productId)

    if (result instanceof successService) return successResponse(res, result.code, result.message, result.data)
    if (result instanceof errorResponse) return errorResponse(res, result.code, result.errors, result.error)
}


export const createProduct = async (req: Request, res: Response) => {
    const productData = req.body
    const userId = (req.user as UserD)._id as string

    const result = await ProcutServices.createProduct(userId, productData)

    if (result instanceof successService) return successResponse(res, result.code, result.message, result.data)
    if (result instanceof errorResponse) return errorResponse(res, result.code, result.errors, result.error)
}

export const updateProducts = async (req: Request, res: Response) => {
    const productId = req.params.id
    const userData = req.body
    const userId = (req.user as UserD)._id as string

    const result = await ProcutServices.updateProduct(userId, productId, userData)

    if (result instanceof successService) return successResponse(res, result.code, result.message, result.data)
    if (result instanceof errorService) return errorResponse(res, result.code, result.errors, result.error)
}

export const deleteProduct = async (req: Request, res: Response) => {
    const productId = req.params.id
    const userId = (req.user as UserD)._id as string

    const result = await ProcutServices.deleteProduct(userId, productId)

    if (result instanceof successService) return successResponse(res, result.code, result.message, result.data);
    if (result instanceof errorService) return errorResponse(res, result.code, result.errors, result.error);
}
