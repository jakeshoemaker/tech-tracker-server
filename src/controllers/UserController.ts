import { Request,Response } from 'express';
import { IUser } from '../models/User'
import userService from '../services/UserService'
//import routes from '../routes'

// calls service
const service = new userService()

// it works!!
const createUserController:(req:Request, res:Response) => void = async(req:Request,res:Response) => {
    // check if there is a request body
    if (req.body) {
        // sloppy fix -- need to clean up
        const user:any = req.body
        await service.createUser(user)
        res.status(200).json("success user created")
    }else{
        res.status(400).send("error creating user")
    }
}

export default {
    createUser: createUserController
}