import { WorkflowServices } from "../services/workflow.service"
import { successService, errorService } from '@/utils/service'
import { successResponse, errorResponse } from "@/utils/response"

import { Request, Response } from "express"


export const getWorkflows = async (req: Request, res: Response) => {
    const page = parseInt(req.params.page) || 1
    const limit = parseInt(req.params.limit) || 12

    const result = await WorkflowServices.getWorkflows(page, limit)

    if (result instanceof successService) return successResponse(res, result.code, result.message, result.data)
    if (result instanceof errorResponse) return errorResponse(res, result.code, result.errors, result.error)
}

export const getWorkflow = async (req: Request, res: Response) => {
    const workflowrId = req.params.id

    const result = await WorkflowServices.getWorkflow(workflowrId)

    if (result instanceof successService) return successResponse(res, result.code, result.message, result.data)
    if (result instanceof errorResponse) return errorResponse(res, result.code, result.errors, result.error)
}


export const createWorkflow = async (req: Request, res: Response) => {
    const workflowData = req.body

    const result = await WorkflowServices.createProduct(workflowData)

    if (result instanceof successService) return successResponse(res, result.code, result.message, result.data)
    if (result instanceof errorResponse) return errorResponse(res, result.code, result.errors, result.error)
}

export const updateWorkflow = async (req: Request, res: Response) => {
    const workflowId = req.params.id
    const workflowData = req.body

    const result = await WorkflowServices.updateProduct(workflowId, workflowData)

    if (result instanceof successService) return successResponse(res, result.code, result.message, result.data)
    if (result instanceof errorService) return errorResponse(res, result.code, result.errors, result.error)
}

export const deleteWorkflow = async (req: Request, res: Response) => {
    const workflowId = req.params.id

    const result = await WorkflowServices.deleteProduct(workflowId);

    if (result instanceof successService) return successResponse(res, result.code, result.message, result.data);
    if (result instanceof errorService) return errorResponse(res, result.code, result.errors, result.error);
}
