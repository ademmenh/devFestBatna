
import { SignUp, SignIn } from '@modules/auth/controller/auth.controller'
import { SignInValidator, SignUpValidator } from '@modules/auth/controller/auth.validator'

import { Router } from 'express'

export const Auth = Router()

Auth.route('/register').post(SignUpValidator, SignUp)

Auth.route('/login').post(SignInValidator, SignIn)
