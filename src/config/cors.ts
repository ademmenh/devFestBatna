
import { PORT, FRONT_END_URL_DEV, FRONT_END_URL_PROD } from './vars'

import { Application } from 'express'
import cors, { CorsOptions } from 'cors'


export const configCORS = (app: Application) => {
    const corsOptions: CorsOptions = {
        origin: [`http://localhost:${PORT}`, FRONT_END_URL_DEV, FRONT_END_URL_PROD],
        credentials: true,
    }

    app.use(cors(corsOptions));
}
