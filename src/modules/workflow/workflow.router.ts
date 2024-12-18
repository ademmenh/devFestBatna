
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
 *     tags: [workflows]
 *     security:
 *       - cookieAuth: []
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
 *         description: The number of workflows per page (default is 12)
 *         schema:
 *           type: integer
 *           default: 12
 *     responses:
 *       200:
 *         description: Workflows have been retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       label:
 *                         type: string
 *                         description: The label of the workflow.
 *                       prompt:
 *                         type: string
 *                         description: Optional prompt for the workflow (can be null or empty).
 *                       position:
 *                         type: object
 *                         properties:
 *                           x:
 *                             type: number
 *                             description: X-coordinate for the position of the workflow.
 *                           y:
 *                             type: number
 *                             description: Y-coordinate for the position of the workflow.
 *                       userId:
 *                         type: string
 *                         description: The ID of the user associated with the workflow (ObjectId).
 *                       type:
 *                         type: string
 *                         description: The type of workflow (e.g., "manual", "automated").
 *       400:
 *         description: Workflow not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "Workflow not found"
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error."
 */
Workflow.route('/').get(isUser, getWorkflows)

/**
 * @swagger
 * /workflows:
 *   post:
 *     summary: Create a workflow
 *     tags: [workflows]
 *     security:
 *       - cookieAuth: []
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
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       label:
 *                         type: string
 *                         description: The label of the workflow.
 *                       prompt:
 *                         type: string
 *                         description: Optional prompt for the workflow (can be null or empty).
 *                       position:
 *                         type: object
 *                         properties:
 *                           x:
 *                             type: number
 *                             description: X-coordinate for the position of the workflow.
 *                           y:
 *                             type: number
 *                             description: Y-coordinate for the position of the workflow.
 *                       userId:
 *                         type: string
 *                         description: The ID of the user associated with the workflow (ObjectId).
 *                       type:
 *                         type: string
 *                         description: The type of workflow (e.g., "manual", "automated").
  *       400:
 *         description: Workflow not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "Workflow not found"
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "Internal Server Error."
 */
Workflow.route('/').post(isUser, createWorkflowValidator, createWorkflow)

/**
 * @swagger
 * /workflows/{id}:
 *   get:
 *     summary: Get workflows
 *     tags: [workflows]
 *     security:
 *       - cookieAuth: []
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
 *         description: The number of workflows per page (default is 12)
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
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       label:
 *                         type: string
 *                         description: The label of the workflow.
 *                       prompt:
 *                         type: string
 *                         description: Optional prompt for the workflow (can be null or empty).
 *                       position:
 *                         type: object
 *                         properties:
 *                           x:
 *                             type: number
 *                             description: X-coordinate for the position of the workflow.
 *                           y:
 *                             type: number
 *                             description: Y-coordinate for the position of the workflow.
 *                       userId:
 *                         type: string
 *                         description: The ID of the user associated with the workflow (ObjectId).
 *                       type:
 *                         type: string
 *                         description: The type of workflow (e.g., "manual", "automated").
 *       400:
 *         description: Workflow not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string[]
 *                   example: ["Workflow not found"]
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string[]
 *                   example: ["Internal Server Error."]
 */

Workflow.route('/:id').get(isUser, getWorkflowValidator, getWorkflow)

/**
 * @swagger
 * /workflows/{id}:
 *   put:
 *     summary: Update a workflow
 *     tags: [workflows]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the workflow to update.
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
 *         description: Workflow has been updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 data:
 *                   type: object
 *                   properties:
 *                     label:
 *                       type: string
 *                       description: The updated label of the workflow.
 *                     prompt:
 *                       type: string
 *                       description: The updated prompt for the workflow (can be null or empty).
 *                       nullable: true
 *                     position:
 *                       type: object
 *                       properties:
 *                         x:
 *                           type: number
 *                           description: Updated X-coordinate for the position of the workflow.
 *                         y:
 *                           type: number
 *                           description: Updated Y-coordinate for the position of the workflow.
 *                     userId:
 *                       type: string
 *                       description: The updated user ID associated with the workflow (ObjectId).
 *                       nullable: true
 *                     type:
 *                       type: string
 *                       description: The updated type of workflow (e.g., "manual", "automated").
 *                       nullable: true
 *       400:
 *         description: Bad request or invalid input.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string[]
 *                   example: ["Invalid input or missing fields."]
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string[]
 *                   example: ["Internal server error."]
 */

Workflow.route('/:id').put(isUser, updateWorkflowValidator, updateWorkflow)

/**
 * @swagger
 * /workflows/{id}:
 *   delete:
 *     summary: Delete a workflow
 *     tags: [workflows]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the workflow to delete.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Workflow has been deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 message:
 *                   type: string
 *                   example: "Workflow deleted successfully."
 *       400:
 *         description: Bad request or invalid input.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string[]
 *                   example: ["Invalid ID or missing fields."]
 *       404:
 *         description: Workflow not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string[]
 *                   example: ["Workflow not found."]
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string[]
 *                   example: ["Internal server error."]
 */

Workflow.route('/:id').delete(isUser, deleteWorkflowValidator, deleteWorkflow)
