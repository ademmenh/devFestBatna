import { WorkflowServices } from "../services/workflow.service"
import { successService, errorService } from '@utils/service'
import { successResponse, errorResponse } from "@utils/response"

import { Request, Response } from "express"
import { UserD } from "@db/user"


export const getWorkflows = async (req: Request, res: Response) => {
    const page = parseInt(req.query.page as string) || 1
    const limit = parseInt(req.query.limit as string) || 12
    const userId = (req.user as UserD)._id as string

    const result = await WorkflowServices.getWorkflows(userId, page, limit)

    if (result instanceof successService) return successResponse(res, result.code, result.message, result.data)
    if (result instanceof errorService) return errorResponse(res, result.code, result.errors, result.error)
}

export const getWorkflow = async (req: Request, res: Response) => {
    const workflowrId = req.params.id
    const userId = (req.user as UserD)._id as string

    const result = await WorkflowServices.getWorkflow(userId, workflowrId)

    if (result instanceof successService) return successResponse(res, result.code, result.message, result.data)
    if (result instanceof errorService) return errorResponse(res, result.code, result.errors, result.error)
}


export const createWorkflow = async (req: Request, res: Response) => {
    const {name, description, nodes, vectors} = req.body
    const userId = (req.user as UserD)._id as string

    const result = await WorkflowServices.createWorkflow(userId, name, description, nodes, vectors)

    if (result instanceof successService) return successResponse(res, result.code, result.message, result.data)
    if (result instanceof errorService) return errorResponse(res, result.code, result.errors, result.error)
}

export const updateWorkflow = async (req: Request, res: Response) => {
    const { id } = req.params
    const {name, description, nodes, vectors} = req.body
    const userId = (req.user as UserD)._id as string

    const result = await WorkflowServices.updateWorkflow(userId, id, name, description, nodes, vectors)

    if (result instanceof successService) return successResponse(res, result.code, result.message, result.data)
    if (result instanceof errorService) return errorResponse(res, result.code, result.errors, result.error)
}

export const deleteWorkflow = async (req: Request, res: Response) => {
    const workflowId = req.params.id
    const userId = (req.user as UserD)._id as string

    const result = await WorkflowServices.deleteWorkflow(userId, workflowId);

    if (result instanceof successService) return successResponse(res, result.code, result.message, result.data);
    if (result instanceof errorService) return errorResponse(res, result.code, result.errors, result.error);
}
