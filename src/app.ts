
import 'module-alias/register'

import { setRoutes } from './routes'
import { initServer } from './config/init'
import { configCORS } from './config/cors'
import { errorMiddleWare } from './middlewares/error'

import express from 'express'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'


const app = express()

// app.use(helmet.noCache())
app.use(helmet.frameguard())
app.use(helmet.hidePoweredBy())
app.use(helmet.ieNoOpen())
app.use(helmet.noSniff())
app.use(helmet.xssFilter())

app.use(express.json())

app.use(cookieParser())

configCORS(app)

setRoutes(app)

initServer(app)

app.use(errorMiddleWare)
