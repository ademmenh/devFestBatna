
import { JWT_SECRET_KEY } from '@config/vars'
import { jwtConfig } from '@config/jwt'

import jwt from 'jsonwebtoken'


export const Sign = (payload: JwtPayload ) => {
    return jwt.sign(payload, JWT_SECRET_KEY, jwtConfig)
}

export const Verify = (token: string) => {
    return jwt.verify(token, JWT_SECRET_KEY)
}
