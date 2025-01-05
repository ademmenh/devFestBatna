
import 'module-alias/register'

import { setRoutes } from './routes'
import { initServer } from './config/init'
import { configCORS } from './config/cors'
import { errorMiddleWare } from './middlewares/error'

import express from 'express'
import cookieParser from 'cookie-parser'


const app = express()

app.use(express.json())

app.use(cookieParser())

configCORS(app)

setRoutes(app)

initServer(app)

app.use(errorMiddleWare)
