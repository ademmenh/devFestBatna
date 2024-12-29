
import { Router } from 'express'
import { getUsers, getMe, banUser, updateMe, deleteMe } from '@modules/user/controller/user.controller'
import { updateUserValidator, getUserValidator, getUsersValidator } from '@modules/user/controller/user.validator'
import { isUser, isAdmin } from '@middlewares/auth'



export const User = Router()

User.route('/').get(isAdmin, getUsersValidator, getUsers)

User.route('/:id/ban').patch(isUser, banUser)

User.route('/me').get(isUser, getUserValidator, getMe)

User.route('/me').put(isUser, updateUserValidator, updateMe)

User.route('/me').delete(isUser, deleteMe)
