
import { Doc } from '@docs/swaggerDoc'
import { Auth } from '@modules/auth'
import { Product } from '@modules/product'
import { User } from '@modules/user'
import { Workflow } from '@modules/workflow'

import { Application } from 'express'
import swaggerUi from 'swagger-ui-express'


export const setRoutes = (app: Application) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(Doc))
    app.use('/auth', Auth)
    app.use('/products', Product)
    app.use('users', User)
    app.use('/workflows', Workflow)
        
}
