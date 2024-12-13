import { SetRoutes } from './routes'
import { errorMiddleWare } from './middlewares/error'

import express from 'express'



const app = express()

app.use(express.json())

SetRoutes(app)

app.use(errorMiddleWare)
