
import { Auth } from '@/modules/auth'
import { Product } from '@/modules/product'
import { User } from '@/modules/user'
import { Workflow } from '@/modules/workflow'

import { Application } from 'express'


export const SetRoutes = (app: Application) => {
    app.use('/auth', Auth),
    app.use('users', User),
    app.use('/products', Product),
    app.use('/workflows', Workflow)
        
}
