
import { Workflow } from '@/db/workflow'
import { errorService, successService } from '@/utils/service'
import { httpLogs } from '@/logs/http'
import { WorkflowLogs } from './workflow.log'
import { WorkflowI } from '@/types/workflow'


export class WorkflowServices {
    static getWorkflow = async (userId: string, productId: string) => {
        try {
            
            const workflow = await Workflow.find({
                userId,
                productId
            })
            if (!workflow) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [WorkflowLogs.WORKFLOW_NOT_FOUND.message],

                )
            }

            return new successService(
                httpLogs.OK.code,
                WorkflowLogs.GET_WORKFLOW_SUCCESS.message,
                workflow,

            )
        } catch (err) {
            return new errorService(
                httpLogs.InternalServerError.code,
                [WorkflowLogs.WORKFLOW_ERROR_GENERIC.message],
                (err as Error).message,

            )
        }
    }
    
    static getWorkflows = async (userId: string, page: number, limit: number) => {
        try {
            
            const products = await Workflow.find({userId})
                .skip((page-1)*limit)
                .limit(limit)

            if (products.length===0) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [WorkflowLogs.WORKFLOW_NOT_FOUND.message],

                )
            }
            const totalItems = await Workflow.countDocuments()

            return new successService(
                httpLogs.OK.code,
                WorkflowLogs.GET_WORKFLOW_SUCCESS.message,
                {
                    products,
                    pagination: {
                        currentPage: page,
                        totalPages: Math.ceil(totalItems / limit),
                        totalItems,
                        limit,
                    },
                },
            )
        } catch (err) {
            return new errorService(
                httpLogs.InternalServerError.code,
                [WorkflowLogs.WORKFLOW_ERROR_GENERIC.message],
                (err as Error).message,

            )
        }
    }

    static createWorkflow = async (userId: string, productData: WorkflowI) => {
        try {

            const product = await Workflow.create({...productData, userId})
            if (!product) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [WorkflowLogs.WORKFLOW_NOT_FOUND.message],

                )
            }

            return new successService(
                httpLogs.OK.code,
                WorkflowLogs.CREATE_WORKFLOW_SUCCESS.message,
                product,
                
            )
        } catch (err) {
            return new errorService(
                httpLogs.InternalServerError.code,
                [WorkflowLogs.WORKFLOW_ERROR_GENERIC.message],
                (err as Error).message,

            )
        }
    }
    

    static updateWorkflow = async (userId: string, workflowId: string, workflowData: Partial<WorkflowI>) => {
        try {

            let workflow = await Workflow.findOne({workflowId, userId})

            if (!workflow) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [WorkflowLogs.WORKFLOW_NOT_FOUND.message],

                )
            }

            workflow = await Workflow.findByIdAndUpdate(workflowId, workflowData, {returnDocument: 'after'})

            return new successService(
                httpLogs.OK.code,
                WorkflowLogs.UPDATE_WORKFLOW_SUCCESS.message,
                workflow,
                
            )
        } catch (err) {
            return new errorService(
                httpLogs.InternalServerError.code,
                [WorkflowLogs.WORKFLOW_ERROR_GENERIC.message],
                (err as Error).message,

            )
        }
    }
    
    static deleteWorkflow = async (userId: string, productId: string) => {
        try {

            let workflow = await Workflow.findOne({userId, productId})
            
            if (!workflow) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [WorkflowLogs.WORKFLOW_NOT_FOUND.message],

                )
            }
            
            workflow = await Workflow.findByIdAndDelete(productId)

            if (!workflow) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [WorkflowLogs.WORKFLOW_NOT_FOUND.message],

                )
            }

            return new successService(
                httpLogs.OK.code,
                WorkflowLogs.UPDATE_WORKFLOW_SUCCESS.message,
                workflow
                
            )
        } catch (err) {
            return new errorService(
                httpLogs.InternalServerError.code,
                [WorkflowLogs.WORKFLOW_ERROR_GENERIC.message],
                (err as Error).message,

            )
        }
    }
}
