
import { errorMiddleWare } from './middlewares/error'

import express from 'express'



const app = express()

app.use(express.json())



app.use(errorMiddleWare)
