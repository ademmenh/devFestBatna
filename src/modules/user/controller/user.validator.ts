import { validator } from '@middlewares/validator'
import { param, body } from 'express-validator'

export const getUserValidator = [
    param('id').isMongoId().withMessage('Invalid mongoId'),

    validator,
]


export const getUsersValidator = [
    param('page')
    .isInt()
    .withMessage('Invalid page'),
    
    param('limit')
    .isInt()
    .withMessage('Invalid page'),

    validator,
]

export const updateUserValidator = [
    body('name')
        .optional()
        .isString()
        .withMessage('Invalid name')
        .isLength({ min: 3, max: 20 })
        .withMessage('firstname'),

    body('lastname')
        .optional()
        .isString()
        .withMessage('Invalid lastname')
        .isLength({ min: 3, max: 20 }),

    body('birthday')
        .optional()
        .isISO8601()
        .withMessage('Invalid birthday'),
    
    body('gender')
        .optional()
        .isIn(['M', 'F'])
        .withMessage('Invalid gender'),

    validator,
]
