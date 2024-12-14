
import { body } from 'express-validator'


export const SignUpValidator = [
    body('name')
        .isLength({min: 3, max: 20})
        .withMessage('Invalid name length'),

    body('lastname')
        .isLength({min: 3, max: 20})
        .withMessage('Invalid firstname length'),

    body('birthday')
        .isISO8601()
        .withMessage('Invalid birthday type'),

    body('gender')
        .isIn(['F', 'M'])
        .withMessage('Invalid gender value'),
    
    body('email')
        .isEmail()
        .withMessage('Invalid email value'),

    body('password')
        .isLength({min: 8, max: 50})
        .withMessage('Invalid password value'),

    body('enabled')
        .exists()
        .custom((value, { req }) => {
          throw new Error('There is Invalid Fields');
        })

    
]


export const SignInValidator = [
    body('email')
    .isEmail()
    .withMessage('Invalid email'),

    body('password')
    .isLength({min: 8, max: 50})
    .withMessage('Invalid password'),

]
