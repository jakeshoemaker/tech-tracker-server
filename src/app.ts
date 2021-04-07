import express from "express";
import dotenv from 'dotenv';
import router from './routes/router'
import yaml from 'js-yaml'
import fs from 'fs'

//let inputYaml = 'swagger.yaml'
//let outputJson = 'swagger.json'
//let obj = yaml.load(fs.readFileSync(inputYaml, {encoding: 'utf-8'}))
//fs.writeFileSync(outputJson, JSON.stringify(obj, null, 2))

var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json')
dotenv.config()
const app = express()

app.use([express.json(),express.urlencoded({extended:true})])
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/',router)


export default app
