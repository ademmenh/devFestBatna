
import {Router} from 'express'
import { getWorkflow, getWorkflows, createWorkflow, updateWorkflow, deleteWorkflow } from '@modules/workflow/controller/workflow.controller'
import { createWorkflowValidator, getWorkflowsValidator, getWorkflowValidator, updateWorkflowValidator, deleteWorkflowValidator } from '@modules/workflow/controller/workflow.validator'
import { isUser } from '@middlewares/auth'



export const Workflow = Router()

Workflow.route('/')
    .get(isUser, getWorkflowsValidator, getWorkflows)
    .post(isUser, createWorkflowValidator, createWorkflow)

Workflow.route('/:id')
    .get(isUser, getWorkflowValidator, getWorkflow)
    .put(isUser, updateWorkflowValidator, updateWorkflow)
    .delete(isUser, deleteWorkflowValidator, deleteWorkflow)
