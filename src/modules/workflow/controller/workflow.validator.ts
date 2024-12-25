
import { NodeI, VectorI } from '@Types/workflow'
import { validator } from '@middlewares/validator'
import { param, body } from 'express-validator'

const nodesLables = [
    'upload image',
    'chatgpt',
    'scheduler',
    'email'

]

export const getWorkflowValidator = [
    param('id')
    .isMongoId()
    .withMessage('Invalid workflow id.'),

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
    body('name')
        .isString()
        .withMessage('Invalid name')
        .isLength({min: 1, max: 20}),
    
    body('description')
        .isString()
        .withMessage('Invalid description')
        .isLength({min: 0, max: 50}),
    
    body('nodes')
        .isArray()
        .withMessage('Invalid nodes type.')
        .custom((array: NodeI[]) => {
            array.forEach((elem: NodeI) => {
                if (typeof elem.data.label !== 'string') {
                    throw new Error('Invalid nodes label type.')
                }
                if (!nodesLables.includes(elem.data.label) ) {
                    throw new Error('Invalid nodes label.')
                }
                if (typeof elem.position.x !== 'number') {
                    throw new Error('Invalid nodes x position type.')
                }
                if (typeof elem.position.y !== 'number') {
                    throw new Error('Invalid nodes y position type.')
                }
            })

            return true
        }),

    body('vectors')
        .isArray()
        .withMessage('Invalid vectors type')
        .custom((array: VectorI[]) => {
            array.forEach((elem: VectorI) => {
                if ((elem.next === undefined && elem.prev !== undefined) || (elem.next !== undefined && elem.prev === undefined)){
                    throw new Error('Invalid vector type.')
                }
                if (elem.prev !== undefined && !Number.isInteger(elem.prev)){
                    throw new Error('Invalid vectors prev type.')
                }
                if (elem.next !== undefined && !Number.isInteger(elem.next)){
                    throw new Error('Invalid vectors next type.')
                }
            })
            return true
        }),

    validator,
]

export const updateWorkflowValidator = [

    body('id')
        .isMongoId()
        .withMessage('Invalid workflow id.'),

    body('name')
        .isString()
        .withMessage('Invalid name')
        .isLength({min: 1, max: 20}),
    
    body('description')
        .isString()
        .withMessage('Invalid description')
        .isLength({min: 0, max: 50}),
    
    body('nodes')
        .isArray()
        .withMessage('Invalid nodes type.')
        .custom((array: NodeI[]) => {
            array.forEach((elem: NodeI) => {
                if (typeof elem.data.label !== 'string') {
                    throw new Error('Invalid nodes label type.')
                }
                if (!nodesLables.includes(elem.data.label) ) {
                    throw new Error('Invalid nodes label.')
                }
                if (elem.position.x !== undefined && typeof elem.position.x !== 'number') {
                    throw new Error('Invalid nodes x position type.')
                }
                if (elem.position.y !== undefined && typeof elem.position.y !== 'number') {
                    throw new Error('Invalid nodes y position type.')
                }
            })

            return true
        }),

    body('vectors')
        .isArray()
        .withMessage('Invalid vectors type')
        .custom((array: VectorI[]) => {
            array.forEach((elem: VectorI) => {
                if ((elem.next === undefined && elem.prev !== undefined) || (elem.next !== undefined && elem.prev === undefined)){
                    throw new Error('Invalid vector type.')
                }
                if (elem.prev !== undefined && !Number.isInteger(elem.prev)){
                    throw new Error('Invalid vectors prev type.')
                }
                if (elem.next !== undefined && !Number.isInteger(elem.next)){
                    throw new Error('Invalid vectors next type.')
                }
            })
            return true
        }),
    
    

    validator,
]

export const deleteWorkflowValidator = [
    param('id')
        .isMongoId()
        .withMessage('Invalid workflow id.'),

    validator,
];