
import { Workflow } from '@/db/workflow'
import { errorService, successService } from '@/utils/service'
import { httpLogs } from '@/logs/http'
import { WorkflowLogs } from './workflow.log'
import { ProductI } from '@/types/product'


export class WorkflowServices {
    static getWorkflow = async (workflowId: string) => {
        try {
            
            const workflow = await Workflow.findById(workflowId)
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
    
    static getWorkflows = async (page: number, limit: number) => {
        try {
            
            const workflows = await Workflow.find().skip((page-1)*limit).limit(limit)
            if (workflows.length===0) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [WorkflowLogs.WORKFLOW_NOT_FOUND.message],

                )
            }
            const totalDocuments = await Workflow.countDocuments()

            return new successService(
                httpLogs.OK.code,
                WorkflowLogs.GET_WORKFLOW_SUCCESS.message,
                {
                    workflows,
                    pagination: {
                        currentPage: page,
                        totalPages: Math.ceil(totalDocuments / limit),
                        totalDocuments,
                        limit,
                    },
                },
            )
        } catch (err) {
            return new errorService(
                httpLogs.InternalServerError.code,
                [WorkflowLogs.GET_WORKFLOW_FAILURE.message],
                (err as Error).message,

            )
        }
    }

    static createProduct = async (productData: ProductI) => {
        try {
            const product = await Workflow.create(productData)
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
    

    static updateProduct = async (productId: string, productData: Partial<ProductI>) => {
        try {
            const workflow = await Workflow.findByIdAndUpdate(productId, productData, {returnDocument: 'after'})
            if (!workflow) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [WorkflowLogs.WORKFLOW_NOT_FOUND.message],

                )
            }

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
    
    static deleteProduct = async (productId: string) => {
        try {
            const product = await Workflow.findByIdAndDelete(productId);

            if (!product) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [WorkflowLogs.WORKFLOW_NOT_FOUND.message],

                )
            }

            return new successService(
                httpLogs.OK.code,
                WorkflowLogs.UPDATE_WORKFLOW_SUCCESS.message,
                product
                
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