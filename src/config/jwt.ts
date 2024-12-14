
import { NODE_ENV, JWT_EXPIRATION_TIME } from "./vars"

export const jwtConfig = {
    expiresIn: JWT_EXPIRATION_TIME
}

export const cookieConfig = {
    maxAge: JWT_EXPIRATION_TIME,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict' as 'strict' | 'lax' | 'none',
    
}
