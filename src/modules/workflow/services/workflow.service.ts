
import { NodeI, VectorI } from '@Types/workflow';
import { Workflow } from '@db/workflow'
import { errorService, successService } from '@utils/service'
import { httpLogs } from '@Types/logs/httpLogs'
import { WorkflowLogs } from './workflow.log'


export class WorkflowServices {
    static getWorkflow = async (userId: string, workflowId: string) => {
        try {
            
            const workflow = await Workflow.find({
                userId,
                workflowId
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
                (err as Error),

            )
        }
    }
    
    static getWorkflows = async (userId: string, page: number, limit: number) => {
        try {
            
            const workflows = await Workflow.find({userId})
                .skip((page-1)*limit)
                .limit(limit)

            if (workflows.length === 0) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [WorkflowLogs.INVALID_PAGE.message],

                )
            }
            const totalItems = await Workflow.countDocuments()

            return new successService(
                httpLogs.OK.code,
                WorkflowLogs.GET_WORKFLOWS_SUCCESS.message,
                {
                    workflows,
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
                (err as Error),

            )
        }
    }

    static createWorkflow = async (userId: string, name: string, description: string, nodes: NodeI[], vectors: VectorI[]) => {
        try {

            const workflow = await Workflow.create({userId, name, description, nodes, vectors})

            if (!workflow) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [WorkflowLogs.WORKFLOW_NOT_FOUND.message],

                )
            }

            return new successService(
                httpLogs.OK.code,
                WorkflowLogs.CREATE_WORKFLOW_SUCCESS.message,
                workflow,
                
            )
        } catch (err) {
            return new errorService(
                httpLogs.InternalServerError.code,
                [WorkflowLogs.WORKFLOW_ERROR_GENERIC.message],
                (err as Error),

            )
        }
    }
    

    static updateWorkflow = async (userId: string, workflowId: string, name: string, description: string, nodes: NodeI[], vectors: VectorI[]) => {
        try {
            let workflow = await Workflow.findOneAndUpdate({_id: workflowId, userId}, {name, description, nodes, vectors}, {upsert: true, returnDocument: 'after'})

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
                (err as Error),

            )
        }
    }
    
    static deleteWorkflow = async (userId: string, workflowId: string) => {
        try {

            const workflow = await Workflow.findOneAndDelete({_id: workflowId, userId})
            console.log(workflow)
            
            if (!workflow) {
                return new errorService(
                    httpLogs.BadRequest.code,
                    [WorkflowLogs.WORKFLOW_NOT_FOUND.message],

                )
            }
            
            return new successService(
                httpLogs.OK.code,
                WorkflowLogs.DELETE_WORKFLOW_SUCCESS.message,
                workflow
                
            )
        } catch (err) {
            return new errorService(
                httpLogs.InternalServerError.code,
                [WorkflowLogs.WORKFLOW_ERROR_GENERIC.message],
                (err as Error),

            )
        }
    }
}
