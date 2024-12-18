
import { Doc } from '@docs/swaggerDoc'
import { Auth } from './auth.router'
import { Output } from './output.router'
import { User } from './user.router'
import { Workflow } from './workflow.router'

import { Application } from 'express'
import swaggerUi from 'swagger-ui-express'


export const setRoutes = (app: Application) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(Doc))
    app.use('/auth', Auth)
    app.use('/products', Output)
    app.use('/users', User)
    app.use('/workflows', Workflow)
        
}
