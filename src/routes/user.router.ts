
import { Router } from 'express'
import { getUsers, getUser, banUser, updateMe, deleteMe } from '@modules/user/controller/user.controller'
import { updateUserValidator, getUserValidator } from '@modules/user/controller/user.validator'
import { isUser, isAdmin } from '@middlewares/auth'

export const User = Router()


/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */


/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     security:
 *       - cookieAuth: []
 *     description: Get a list of all users. Only accessible by admin.
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
 *     responses:
 *       200:
 *         description: List of users retrieved successfully.
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
 *                       id:
 *                         type: string
 *                         description: The user's unique identifier (ObjectId).
 *                       name:
 *                         type: string
 *                         description: The user's first name.
 *                       lastname:
 *                         type: string
 *                         description: The user's last name.
 *                       birthday:
 *                         type: string
 *                         format: date
 *                         description: The user's birth date.
 *                       gender:
 *                         type: string
 *                         description: The user's gender.
 *                       role:
 *                         type: string
 *                         description: The user's role (admin or user).
 *                       email:
 *                         type: string
 *                         description: The user's email address.
 *       401:
 *         description: Unauthorized – Admin only.
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
 *                   example: "Unauthorized access. Admins only."
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

User.route('/:id').get(isAdmin, getUsers)

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Update user details by ID
 *     tags: [Users]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the user to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user's first name.
 *               lastname:
 *                 type: string
 *                 description: The user's last name.
 *               birthday:
 *                 type: string
 *                 format: date
 *                 description: The user's birth date.
 *               gender:
 *                 type: string
 *                 description: The user's gender.
 *               role:
 *                 type: string
 *                 enum:
 *                   - admin
 *                   - user
 *                 description: The user's role (admin or user).
 *               email:
 *                 type: string
 *                 description: The user's email address.
 *               enabled:
 *                 type: boolean
 *                 description: Whether the user's account is enabled.
 *     responses:
 *       200:
 *         description: User details updated successfully.
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
 *                     name:
 *                       type: string
 *                       description: The user's first name.
 *                     lastname:
 *                       type: string
 *                       description: The user's last name.
 *                     birthday:
 *                       type: string
 *                       format: date
 *                       description: The user's birth date.
 *                     gender:
 *                       type: string
 *                       description: The user's gender.
 *                     role:
 *                       type: string
 *                       description: The user's role (admin or user).
 *                     email:
 *                       type: string
 *                       description: The user's email address.
 *                     enabled:
 *                       type: boolean
 *                       description: Whether the user's account is enabled.
 *       400:
 *         description: Invalid input data.
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
 *                   example: "Invalid input data."
 *       401:
 *         description: Unauthorized – User not authorized to update.
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
 *                   example: "Unauthorized access."
 *       404:
 *         description: User not found.
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
 *                   example: "User not found."
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
User.route('/:id').get(isAdmin, getUserValidator, getUser)


/**
 * @swagger
 * /users/{id}:
 *   patch:
 *     summary: Update user details by ID
 *     tags: [Users]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the user to update.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User details updated successfully.
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
 *                     id:
 *                       type: string
 *                       description: The user's unique identifier (ObjectId).
 *                     name:
 *                       type: string
 *                       description: The user's first name.
 *                     lastname:
 *                       type: string
 *                       description: The user's last name.
 *                     birthday:
 *                       type: string
 *                       format: date
 *                       description: The user's birth date.
 *                     gender:
 *                       type: string
 *                       description: The user's gender.
 *                     role:
 *                       type: string
 *                       description: The user's role (admin or user).
 *                     email:
 *                       type: string
 *                       description: The user's email address.
 *                     banned:
 *                       type: boolean
 *                       description: Whether the user is banned or not.
 *       400:
 *         description: Invalid input data.
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
 *                   example: "Invalid input data."
 *       401:
 *         description: Unauthorized – User not authorized to update.
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
 *                   example: "Unauthorized access."
 *       404:
 *         description: User not found.
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
 *                   example: "User not found."
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

User.route('/:id/ban').patch(isUser, banUser)


/**
 * @swagger
 * /users/me:
 *   patch:
 *     summary: Update user details by ID
 *     tags: [Users]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: User details updated successfully.
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
 *                     id:
 *                       type: string
 *                       description: The user's unique identifier (ObjectId).
 *                     name:
 *                       type: string
 *                       description: The user's first name.
 *                     lastname:
 *                       type: string
 *                       description: The user's last name.
 *                     birthday:
 *                       type: string
 *                       format: date
 *                       description: The user's birth date.
 *                     gender:
 *                       type: string
 *                       description: The user's gender.
 *                     role:
 *                       type: string
 *                       description: The user's role (admin or user).
 *                     email:
 *                       type: string
 *                       description: The user's email address.
 *       400:
 *         description: Invalid input data.
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
 *                   example: "Invalid input data."
 *       401:
 *         description: Unauthorized – User not authorized to update.
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
 *                   example: "Unauthorized access."
 *       404:
 *         description: User not found.
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
 *                   example: "User not found."
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

User.route('/me').patch(isUser, updateUserValidator, updateMe)


/**
 * @swagger
 * /users/me:
 *   delete:
 *     summary: Delete me
 *     tags: [Users]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: User deleted successfully.
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
 *                   example: "User deleted successfully."
 *       400:
 *         description: Invalid input data.
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
 *                   example: "Invalid input data."
 *       401:
 *         description: Unauthorized – User not authorized to delete.
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
 *                   example: "Unauthorized access."
 *       404:
 *         description: User not found.
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
 *                   example: "User not found."
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
User.route('/me').delete(isUser, deleteMe)
