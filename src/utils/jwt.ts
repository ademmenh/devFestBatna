
import { JWT_SECRET_KEY } from '@config/vars'
import { jwtConfig } from '@config/jwt'

import jwt from 'jsonwebtoken'


export const Sign = (payload: JwtPayload ): string => {
    return jwt.sign(payload, JWT_SECRET_KEY, jwtConfig)
}

export const Verify = (token: string): JwtPayload => {
    return (jwt.verify(token, JWT_SECRET_KEY) as JwtPayload)
}
