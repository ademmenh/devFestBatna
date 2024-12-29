
import {Router} from 'express'
import { getWorkflow, getWorkflows, createWorkflow, updateWorkflow, deleteWorkflow } from '@modules/workflow/controller/workflow.controller'
import { createWorkflowValidator, getWorkflowsValidator, getWorkflowValidator, updateWorkflowValidator, deleteWorkflowValidator } from '@modules/workflow/controller/workflow.validator'
import { isUser } from '@middlewares/auth'



export const Workflow = Router()

Workflow.route('/').get(isUser, getWorkflowsValidator, getWorkflows)

Workflow.route('/').post(isUser, createWorkflowValidator, createWorkflow)

Workflow.route('/:id').get(isUser, getWorkflowValidator, getWorkflow)

Workflow.route('/').put(isUser, updateWorkflowValidator, updateWorkflow)

Workflow.route('/:id').delete(isUser, deleteWorkflowValidator, deleteWorkflow)
