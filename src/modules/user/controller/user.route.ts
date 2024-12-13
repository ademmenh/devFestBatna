
import {Router} from 'express'
import { getUser, updateUser, deleteUser } from './user.controller'
import { updateUserValidator, getUserValidator, deleteUserValidator } from './user.validator'
import { isUser } from '@/middlewares/auth'

export const User = Router()

User.route('/:id')
    .get(isUser, getUserValidator, getUser)
    .patch(isUser, updateUserValidator, updateUser)
    .delete(isUser, deleteUserValidator, deleteUser)
