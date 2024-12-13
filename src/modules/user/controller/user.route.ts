
import { Router } from 'express'
import { getUsers, getUser, updateUser, deleteUser } from './user.controller'
import { updateUserValidator, getUserValidator, deleteUserValidator } from './user.validator'
import { isUser, isAdmin } from '@/middlewares/auth'

export const User = Router()

User.route('/')
    .get(isAdmin, getUsers)

User.route('/:id')
    .get(isUser, getUserValidator, getUser)
    .patch(isUser, updateUserValidator, updateUser)
    .delete(isUser, deleteUserValidator, deleteUser)
