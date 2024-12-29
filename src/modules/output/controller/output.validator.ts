
import { validator } from '@middlewares/validator'
import { param, body, query } from 'express-validator'

export const getOutputValidator = [
    param('id')
        .isMongoId()
        .withMessage('Invalid mongoId'),

    validator,
]

export const getOutputsValidator = [
    query('page')
        .optional()
        .isInt({min: 1})
        .withMessage('Invalid page.'),

    query('limit')
        .optional()
        .isInt({min: 1, max: 24})
        .withMessage('Invalid limit.'),

    validator,
]

export const createOutputValidator = [
    body('outputs')
        .custom(outputs => {
            if (typeof outputs === 'object' && Object.keys(outputs).length === 0) {
                throw new Error('Invalid outputs.')
            }
            else if (typeof outputs !== 'object') {
                throw new Error('Invalid outputs.')
            }

            return true
        }),
        
    body('otuputs.text')
        .optional()
        .isString()
        .withMessage('Invalid text type.'),

    body('otuputs.image')
        .optional()
        .isString()
        .withMessage('Invalid images type.')
        .isURL({protocols: ['https'], require_tld: true})
        .withMessage('Invalid URL'),

    body('otuputs.video')
        .optional()
        .isString()
        .withMessage('Invalid video type.')
        .isURL({protocols: ['https'], require_tld: true})
        .withMessage('Invalid URL'),

    body('otuputs.audio')
        .optional()
        .isString()
        .withMessage('Invalid audio type.')
        .isURL({protocols: ['https'], require_tld: true})
        .withMessage('Invalid URL'),

    body('otuputs.document')
        .optional()
        .isString()
        .withMessage('Invalid document type.')
        .isURL({protocols: ['https'], require_tld: true})
        .withMessage('Invalid URL'),

    validator,
]

export const deleteOutputValidator = [
    param('id')
        .isMongoId()
        .withMessage('Invalid mongoId'),

    validator,
]
