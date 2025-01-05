
import { Router } from 'express'
import { getProfile, updateProfile, deleteProfile } from '@modules/user/controller/user.controller'
import { updateUserValidator, getUserValidator} from '@modules/user/controller/user.validator'
import { isUser } from '@middlewares/auth'



export const User = Router()

User.route('/profile')
    .get(isUser, getUserValidator, getProfile)
    .put(isUser, updateUserValidator, updateProfile)
    .delete(isUser, deleteProfile)
