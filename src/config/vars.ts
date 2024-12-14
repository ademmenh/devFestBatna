

const envExist = (key: string): string => {
    if (!process.env[`${key}`]) {
        console.log(`${key} is undefined.`)
        process.exit(1)
    }

    console.log(`${key}: ${process.env[`${key}`]}`)
    return (process.env[`${key}`] as string)
}



export const NODE_ENV = envExist('NODE_ENV')

export const NODE_URL = envExist('NODE_URL')

export const PORT = Number(envExist('PORT'))

export const DB_URI = envExist('DB_URI')

export const JWT_EXPIRATION_TIME = Number(envExist('JWT_EXPIRATION_TIME'))

export const JWT_SECRET_KEY = envExist('JWT_SECRET_KEY')

// ORIGINS
export const FRONT_END_URL_PROD = envExist('FRONT_END_URL_PROD')

export const FRONT_END_URL_DEV = envExist('FRONT_END_URL_DEV')
