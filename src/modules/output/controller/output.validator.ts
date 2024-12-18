
import { validator } from '@middlewares/validator'
import { param, body } from 'express-validator'

export const getOutputValidator = [
    param('id').isMongoId().withMessage('Invalid mongoId'),

    validator,
]

const createOutputAllowedFields = [
    'text',
    'image',
    'video',
    'audio',
    'document',

]

export const createOutputValidator = [
    body('text')
        .optional()
        .isString()
        .withMessage('Invalid text')
        .isLength({max: 200 })
        .withMessage('firstname'),

    body('image')
        .optional()
        .isURL({protocols: ['https'], require_tld: true})
        .withMessage('Invalid URL'),

    body('video')
        .optional()
        .isURL({protocols: ['https'], require_tld: true})
        .withMessage('Invalid URL'),

    body('audio')
        .optional()
        .isURL({protocols: ['https'], require_tld: true})
        .withMessage('Invalid URL'),

    body('document')
        .optional()
        .isURL({protocols: ['https'], require_tld: true})
        .withMessage('Invalid URL'),


    body().custom((body, { req }) => {
        const invalidFields = Object.keys(req.body).filter(
            (field) => !createOutputAllowedFields.includes(field)
        )

        if (invalidFields.length > 0) {
            throw new Error(...invalidFields)
        }

        return true
    }),

    validator,
]

export const deleteOutputValidator = [
    param('id')
        .isMongoId()
        .withMessage('Invalid mongoId'),

    validator,
];