
import { SignUp, SignIn } from './controller/auth.controller'
import { SignInValidator, SignUpValidator } from './controller/auth.validator'

import { Router } from 'express'

export const Auth = Router()

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Auth management
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               lastname:
 *                 type: string
 *               birthday:
 *                 type: string
 *                 format: date
 *               gender:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 lastname:
 *                   type: string
 *                 birthday:
 *                   type: string
 *                   format: date
 *                 role:
 *                   type: string
 *                 gender:
 *                   type: string
 *                 email:
 *                   type: string
 *       400:
 *         description: Username or Email already exists
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   errors: string[]
 *                   example: ["Bad Request."]
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   errors: string[]
 *                   example: ["Internal Server Error."]
 */
Auth.route('/register').post(SignUpValidator, SignUp)

/**
 * @swagger
 * /auth/loging:
 *   post:
 *     summary: Login a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                 lastname:
 *                   type: string
 *                 birthday:
 *                   type: string
 *                   format: date
 *                 role:
 *                   type: string
 *                 gender:
 *                   type: string
 *                 email:
 *                   type: string
 *       400:
 *         description: Username or Email already exists
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   errors: string[]
 *                   example: ["Invalid credentials."]
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   errors: string[]
 *                   example: ["Internal Server Error."]
 */
Auth.route('/login').post(SignInValidator, SignIn)
