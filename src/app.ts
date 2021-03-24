import express from "express";
import dotenv from 'dotenv';
//import cookieParser from "cookie-parser";
//import bodyParser from "body-parser";
//import cors from "cors";
import connect_db from "../db";



import router,{noAuthRoutes} from './routes/router'

dotenv.config()
const app = express()

// set up db connection
// connect_db(app)

app.use([express.json(),express.urlencoded({extended:true})])//parse url and json data
app.use('/',router)


export default app
