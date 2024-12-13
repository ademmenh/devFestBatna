

const envExist = (key: string): string => {
    if (!process.env[`${key}`]) {
        console.log(`${key} is undefined.`)
        process.exit(1)
    }

    console.log(`${key}: ${process.env[`${key}`]}`)
    return (process.env[`${key}`] as string)
}



export const NODE_ENV = envExist('NODE_ENV')

export const PORT = Number(envExist('PORT'))

export const DB_URI = envExist('DB_URI')

export const JWT_EXPIRATION_TIME = Number(envExist('JWT_EXPIRATION_TIME'))

export const JWT_SECRET_KEY = envExist('JWT_SECRET_KEY')
