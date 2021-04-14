import express from "express";
import dotenv from 'dotenv';
import router from './routes/router'
import jwt from 'jsonwebtoken'

const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json')

dotenv.config()
const app = express()

app.use([express.json(),express.urlencoded({extended:true})])
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/',router)


export default app
