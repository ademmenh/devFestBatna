
import { JWT_SECRET_KEY } from '@config/vars'
import { jwtConfig } from '@config/jwt'

import jwt from 'jsonwebtoken'


export const Sign = async (payload: JwtPayload ) => {
    const token = jwt.sign(payload, JWT_SECRET_KEY, jwtConfig)
}

export const Verify = async (token: string) => {
    return jwt.verify(token, JWT_SECRET_KEY)
}
