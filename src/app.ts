import express from "express";
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import cors from "cors";



import router from './routes/router'

dotenv.config()
const app = express()

app.use([express.json(),express.urlencoded({extended:true})])//parse url and json data
app.use('/',router)


export default app
