
import { Router } from 'express'
import { getOutput, getOutputs, createOutput, deleteOutput } from '@modules/output/controller/output.controller'
import { createOutputValidator, getOutputValidator, deleteOutputValidator } from '@modules/output/controller/output.validator'
import { isUser } from '@middlewares/auth'

export const Output = Router()

Output.route('/')
    .get(isUser, getOutputs)
    .post(isUser, createOutputValidator, createOutput)

Output.route('/:id')
    .get(isUser, getOutputValidator, getOutput)
    .delete(isUser, deleteOutputValidator, deleteOutput)
