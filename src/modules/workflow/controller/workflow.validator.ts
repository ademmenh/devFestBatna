
import { NodeI, nodesLables, VectorI } from '@Types/workflow'
import { validator } from '@middlewares/validator'
import { param, body } from 'express-validator'


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
                if (Object.keys(nodesLables).includes(elem.data.label) ) {
                    throw new Error('Invalid nodes label.')
                }
            })
        })
        .custom((array: NodeI[]) => {
            array.forEach((elem: NodeI) => {
                if (typeof elem.position.x !== 'number') {
                    throw new Error('Invalid nodes x position type.')
                }
                if (typeof elem.position.y !== 'number') {
                    throw new Error('Invalid nodes y position type.')
                }
            })
        }),

    body('vectors')
        .isArray()
        .withMessage('Invalid vectors type')
        .custom((array: VectorI[]) => {
            array.forEach((elem: VectorI) => {
                if (!Number.isInteger(elem.prev)){
                    throw new Error('Invalid vectors prev type.')
                }
                if (!Number.isInteger(elem.next)){
                    throw new Error('Invalid vectors next type.')
                }
            })
        }),

    validator,
]

export const updateWorkflowValidator = [

    param('id')
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
                if (Object.keys(nodesLables).includes(elem.data.label) ) {
                    throw new Error('Invalid nodes label.')
                }
            })
        })
        .custom((array: NodeI[]) => {
            array.forEach((elem: NodeI) => {
                if (typeof elem.position.x !== 'number') {
                    throw new Error('Invalid nodes x position type.')
                }
                if (typeof elem.position.y !== 'number') {
                    throw new Error('Invalid nodes y position type.')
                }
            })
        }),

    body('vectors')
        .isArray()
        .withMessage('Invalid vectors type')
        .custom((array: VectorI[]) => {
            array.forEach((elem: VectorI) => {
                if (!Number.isInteger(elem.prev)){
                    throw new Error('Invalid vectors prev type.')
                }
                if (!Number.isInteger(elem.next)){
                    throw new Error('Invalid vectors next type.')
                }
            })
        }),

    validator,
]

export const deleteWorkflowValidator = [
    param('id')
        .isMongoId()
        .withMessage('Invalid workflow id.'),

    validator,
];