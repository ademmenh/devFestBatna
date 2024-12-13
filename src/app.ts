
import { setRoutes } from './routes'
import { initServer } from './config/init'
import { errorMiddleWare } from './middlewares/error'

import express from 'express'
import { configCORS } from './config/cors'



const app = express()

app.use(express.json())

configCORS(app)

setRoutes(app)

initServer(app)

app.use(errorMiddleWare)
