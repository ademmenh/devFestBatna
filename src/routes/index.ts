
import { Auth } from './auth.router'
import { Output } from './output.router'
import { User } from './user.router'
import { Workflow } from './workflow.router'

import fs from 'fs'
import { Application } from 'express'
import swaggerUi from 'swagger-ui-express'



export const setRoutes = async (app: Application) => {
    const swaggerDocument = JSON.parse(fs.readFileSync('./bundled.swagger.json', 'utf-8'))

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
    app.use('/auth', Auth)
    app.use('/outputs', Output)
    app.use('/users', User)
    app.use('/workflows', Workflow)
        
}
