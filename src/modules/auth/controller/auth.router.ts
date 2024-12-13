
import { SignUp, SignIn } from './auth.controller'
import { SignInValidator, SignUpValidator } from './auth.validator'

import { Router } from 'express'

export const Auth = Router()

Auth.route('/register').post(SignUpValidator, SignUp)
Auth.route('/login').post(SignInValidator, SignIn)
