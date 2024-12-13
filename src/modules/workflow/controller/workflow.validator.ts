
import { validator } from '@/middlewares/validator'
import { param, body } from 'express-validator'

export const getWorkflowValidator = [
    param('id').isMongoId().withMessage('Invalid mongoId'),

    validator,
]

export const getAllWorkflowValidator = [
    param('page')
    .isInt()
    .withMessage('Invalid page'),
    
    param('limit')
    .isInt()
    .withMessage('Invalid page'),

    validator,
]

export const createWorkflowValidator = [
    body('data.label')
        .isString()
        .withMessage('Invalid lable type.')
        .isLength({ min: 3, max: 20 })
        .withMessage('Invalid lable length.'),

    body('data.prompt')
        .isString()
        .withMessage('Invalid prompt type.')
        .isLength({ min: 0, max: 1000 })
        .withMessage('Invalid prompt length.'),


    body('position.x')
        .isFloat()
        .withMessage('Invalid position.x'),
        
    body('position.y')
    .isFloat()
    .withMessage('Invalid position.y'),

    body('type')
        .isString()
        .withMessage('Invalid type'),

        validator,
]

const updateWrokflowAllowedFields = [
    'data.label',
    'data.prompt',
    'position.x',
    'position.y',
    'type',
]

export const updateWorkflowValidator = [
    body('data.label')
        .optional()
        .isString()
        .withMessage('Invalid lable type.')
        .isLength({ min: 3, max: 20 })
        .withMessage('Invalid lable length.'),

    body('data.prompt')
        .optional()
        .isString()
        .withMessage('Invalid prompt type.')
        .isLength({ min: 3, max: 1000 })
        .withMessage('Invalid prompt length.'),

    body('position.x')
        .optional()
        .isFloat()
        .withMessage('Invalid position.x'),
        
    body('position.y')
    .optional()
    .isFloat()
    .withMessage('Invalid position.y'),

    body('type')
        .optional()
        .isString()
        .withMessage('Invalid type'),


    body().custom((body, { req }) => {
        const invalidFields = Object.keys(req.body).filter(
            (field) => !updateWrokflowAllowedFields.includes(field)
        )

        if (invalidFields.length > 0) {
            throw new Error(...invalidFields)
        }

        return true
    }),

    validator,
]

export const deleteWorkflowValidator = [
    param('id')
        .isMongoId()
        .withMessage('Invalid mongoId'),

    validator,
];