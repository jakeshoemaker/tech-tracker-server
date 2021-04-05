import { Request,Response } from 'express'
import { IUser } from '../models/User'
import userService from '../services/UserService'
import { ObjectId } from 'mongodb'

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

const readUserController:(req:Request, res:Response) => void = async(req:Request, res:Response) => {
  if (req.body) {
    const users = await service.readUser()
    res.status(200).json(users)
  } else {
    res.status(400).send("error!")
  }
}

const updateUserController:(req:Request, res:Response) => void = async(req:Request, res:Response) => {
		// check for a body
		if (req.body) {
				const id:ObjectId = new ObjectId(req.params.id)

				const user_updates:Partial<IUser> = {}
				if ('email' in req.body) {
						user_updates.email = req.body.email
				}
				if ('password' in req.body) {
						user_updates.password = req.body.password
				}
				if ('choices' in req.body) {
						user_updates.choices = req.body.choices
				}

				await service.updateUser(id, user_updates)
				res.status(200).json("success, user has been updated")
		} else {
				res.status(400).send("error! could not update user, did you enter the correct id?")
		}
}

const deleteUserController:(req:Request, res:Response) => void = async(req:Request, res:Response) => {
		// check for a email
		if (req) {
				const id:ObjectId = new ObjectId(req.params.id)

				await service.deleteUser(id)
				res.status(200).json("success, user: was deleted")
		} else {
				res.status(400).send("error deleting the user")
		}
}

export default {
    createUser: createUserController,
    readUser: readUserController,
		updateUser: updateUserController,
		deleteUser: deleteUserController
}
