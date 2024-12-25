
// import { Doc } from '@docs/swaggerDoc'
import { exitLogs} from '@Types/logs/exitLogs'
import { Auth } from './auth.router'
import { Output } from './output.router'
import { User } from './user.router'
import { Workflow } from './workflow.router'

import fs from 'fs'
import path from 'path'
import { Application } from 'express'
import swaggerUi from 'swagger-ui-express'



export const setRoutes = async (app: Application) => {
    const swaggerDocument = JSON.parse(fs.readFileSync('src/docs/swagger.json', 'utf-8'))

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
    app.use('/auth', Auth)
    app.use('/products', Output)
    app.use('/users', User)
    app.use('/workflows', Workflow)
        
}
