
import { validator } from '@middlewares/validator'
import { param, body } from 'express-validator'

export const getProductValidator = [
    param('id').isMongoId().withMessage('Invalid mongoId'),

    validator,
]

export const createProductValidator = [
    body('title')
        .isString()
        .withMessage('Invalid title')
        .isLength({ min: 3, max: 20 })
        .withMessage('firstname'),

    body('description')
        .isString()
        .withMessage('Invalid description')
        .isLength({max: 99 }),

    body('price')
        .isFloat({min: 0})
        .withMessage('Invalid price'),

    body('userId')
        .isMongoId()
        .withMessage('Invalid userId'),

    body('userphone')
        .isString()
        .withMessage('Invalid userphone')
        .isLength({min: 10, max: 10})
        .withMessage('userphone is too short'),

        validator,
]

const updateProductAllowedFields = [
    'title',
    'description',
    'price',
    'role',
    'userPhone',
]

export const updateProductValidator = [
    body('title')
        .optional()
        .isString()
        .withMessage('Invalid title')
        .isLength({ min: 3, max: 20 })
        .withMessage('firstname'),

    body('description')
        .optional()
        .isString()
        .withMessage('Invalid description')
        .isLength({ min: 3, max: 20 }),

    body('price')
        .optional()
        .isFloat({min: 0})
        .withMessage('Invalid price'),

    body('userId')
        .isMongoId()
        .withMessage('Invalid userId'),

    body('userphone')
        .isString()
        .withMessage('Invalid userphone')
        .isLength({min: 10, max: 10})
        .withMessage('userphone is too short'),

    body().custom((body, { req }) => {
        const invalidFields = Object.keys(req.body).filter(
            (field) => !updateProductAllowedFields.includes(field)
        )

        if (invalidFields.length > 0) {
            throw new Error(...invalidFields)
        }

        return true
    }),

    validator,
]

export const deleteProductValidator = [
    param('id')
        .isMongoId()
        .withMessage('Invalid mongoId'),

    validator,
];