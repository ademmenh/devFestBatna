
import {Router} from 'express'
import { getWorkflow, getWorkflows, createWorkflow, updateWorkflow, deleteWorkflow } from './controller/workflow.controller'
import { createWorkflowValidator, updateWorkflowValidator, getWorkflowValidator, deleteWorkflowValidator } from './controller/workflow.validator'
import { isUser } from '@middlewares/auth'

export const Workflow = Router()

/**
 * @swagger
 * tags:
 *   name: workflows
 *   description: Workflow management
 */



/**
 * @swagger
 * /workflows:
 *   get:
 *     summary: Get workflows
 *     tags: 
 *         - Workflows
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         required: false
 *         description: The page number to retrieve (default is 1)
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: limit
 *         required: false
 *         description: The number of users per page (default is 12)
 *         schema:
 *           type: integer
 *           default: 12
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: object
 *                 properties:
 *                   label:
 *                     type: string
 *                     description: The label of the workflow.
 *                   prompt:
 *                     type: string
 *                     description: Optional prompt for the workflow (can be null or empty).
 *               position:
 *                 type: object
 *                 properties:
 *                   x:
 *                     type: number
 *                     description: X-coordinate for the position of the workflow.
 *                   y:
 *                     type: number
 *                     description: Y-coordinate for the position of the workflow.
 *               userId:
 *                 type: string
 *                 description: The ID of the user associated with the workflow (ObjectId).
 *               type:
 *                 type: string
 *                 description: The type of workflow (e.g., "manual", "automated").
 *     responses:
 *       200:
 *         description: Workflows have been retrieved successfully.
 *       400:
 *         description: Workflow not found.
 *       500:
 *         description: Internal server error.
 */
Workflow.route('/').get(isUser, getWorkflows)

/**
 * @swagger
 * /workflows:
 *   post:
 *     summary: Create a workflow
 *     tags:
 *       - Workflows
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: object
 *                 properties:
 *                   label:
 *                     type: string
 *                     description: The label of the workflow.
 *                   prompt:
 *                     type: string
 *                     description: Optional prompt for the workflow (can be null or empty).
 *               position:
 *                 type: object
 *                 properties:
 *                   x:
 *                     type: number
 *                     description: X-coordinate for the position of the workflow.
 *                   y:
 *                     type: number
 *                     description: Y-coordinate for the position of the workflow.
 *               userId:
 *                 type: string
 *                 description: The ID of the user associated with the workflow (ObjectId).
 *               type:
 *                 type: string
 *                 description: The type of workflow (e.g., "manual", "automated").
 *     responses:
 *       200:
 *         description: Workflow has been created successfully.
 *       400:
 *         description: Bad request or invalid input.
 *       500:
 *         description: Internal server error.
 */
Workflow.route('/').post(isUser, createWorkflowValidator, createWorkflow)

/**
 * @swagger
 * /workflows/{id}:
 *   get:
 *     summary: Create a workflow
 *     tags:
 *       - Workflows
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: object
 *                 properties:
 *                   label:
 *                     type: string
 *                     description: The label of the workflow.
 *                   prompt:
 *                     type: string
 *                     description: Optional prompt for the workflow (can be null or empty).
 *               position:
 *                 type: object
 *                 properties:
 *                   x:
 *                     type: number
 *                     description: X-coordinate for the position of the workflow.
 *                   y:
 *                     type: number
 *                     description: Y-coordinate for the position of the workflow.
 *               userId:
 *                 type: string
 *                 description: The ID of the user associated with the workflow (ObjectId).
 *               type:
 *                 type: string
 *                 description: The type of workflow (e.g., "manual", "automated").
 *     responses:
 *       200:
 *         description: Workflow has been created successfully.
 *       400:
 *         description: Bad request or invalid input.
 *       500:
 *         description: Internal server error.
 */
Workflow.route('/:id').get(isUser, getWorkflowValidator, getWorkflow)

/**
 * @swagger
 * /workflow/:
 *   post:
 *     summary: Create a workflow
 *     tags:
 *       - Workflows
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: object
 *                 properties:
 *                   label:
 *                     type: string
 *                     description: The label of the workflow.
 *                   prompt:
 *                     type: string
 *                     description: Optional prompt for the workflow (can be null or empty).
 *                     nullable: true  # Make prompt optional (can be null)
 *               position:
 *                 type: object
 *                 properties:
 *                   x:
 *                     type: number
 *                     description: X-coordinate for the position of the workflow.
 *                   y:
 *                     type: number
 *                     description: Y-coordinate for the position of the workflow.
 *               userId:
 *                 type: string
 *                 description: The ID of the user associated with the workflow (ObjectId).
 *                 nullable: true  # Make userId optional (can be null)
 *               type:
 *                 type: string
 *                 description: The type of workflow (e.g., "manual", "automated").
 *                 nullable: true  # Make type optional (can be null)
 *     responses:
 *       200:
 *         description: Workflow has been created successfully.
 *       400:
 *         description: Bad request or invalid input.
 *       500:
 *         description: Internal server error.
 */
Workflow.route('/:id').patch(isUser, updateWorkflowValidator, updateWorkflow)

/**
 * @swagger
 * /workflow/post/{id}:
 *   post:
 *     summary: Create a workflow
 *     tags:
 *       - Workflows
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the workflow to update or create.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: object
 *                 properties:
 *                   label:
 *                     type: string
 *                     description: The label of the workflow.
 *                   prompt:
 *                     type: string
 *                     description: Optional prompt for the workflow (can be null or empty).
 *                     nullable: true
 *               position:
 *                 type: object
 *                 properties:
 *                   x:
 *                     type: number
 *                     description: X-coordinate for the position of the workflow.
 *                   y:
 *                     type: number
 *                     description: Y-coordinate for the position of the workflow.
 *               userId:
 *                 type: string
 *                 description: The ID of the user associated with the workflow (ObjectId).
 *                 nullable: true
 *               type:
 *                 type: string
 *                 description: The type of workflow (e.g., "manual", "automated").
 *                 nullable: true
 *     responses:
 *       200:
 *         description: Workflow has been created successfully.
 *       400:
 *         description: Bad request or invalid input.
 *       500:
 *         description: Internal server error.
 */
Workflow.route('/:id').delete(isUser, deleteWorkflowValidator, deleteWorkflow)
