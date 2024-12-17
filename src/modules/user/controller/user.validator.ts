import { validator } from '@middlewares/validator'
import { param, body } from 'express-validator'

export const getUserValidator = [
    param('id').isMongoId().withMessage('Invalid mongoId'),

    validator,
]


export const getAllUserValidator = [
    param('page')
    .isInt()
    .withMessage('Invalid page'),
    
    param('limit')
    .isInt()
    .withMessage('Invalid page'),

    validator,
]

const updateUserAllowedFields = [
    'firstname',
    'lastname',
    'birthday',
    'gender',
    'email',
]

export const updateUserValidator = [
    
    body().custom((body, { req }) => {
        const invalidFields = Object.keys(req.body).filter(
            (field) => !updateUserAllowedFields.includes(field)
        )

        if (invalidFields.length > 0) {
            throw new Error(...invalidFields)
        }

        return true
    }),

    body('firstname')
        .optional()
        .isString()
        .withMessage('Invalid firstanme')
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

    body('email')
        .optional()
        .isEmail()
        .withMessage('Invalid email'),

    validator,
]
