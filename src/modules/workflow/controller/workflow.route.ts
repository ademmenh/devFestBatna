
import {Router} from 'express'
import { getWorkflow, getWorkflows, createWorkflow, updateWorkflow, deleteWorkflow } from './workflow.controller'
import { createWorkflowValidator, updateWorkflowValidator, getWorkflowValidator, deleteWorkflowValidator } from './workflow.validator'
import { isUser } from '@middlewares/auth'

export const Workflow = Router()

Workflow.route('/')
    .get(isUser, getWorkflows)
    .post(isUser, createWorkflowValidator, createWorkflow)

Workflow.route('/:id')
    .get(isUser, getWorkflowValidator, getWorkflow)
    .patch(isUser, updateWorkflowValidator, updateWorkflow)
    .delete(isUser, deleteWorkflowValidator, deleteWorkflow)
