import User, { IUser } from '../models/User'
import { ObjectId, DeleteWriteOpResultObject } from 'mongodb'


export default class UserService{
    constructor(){}

    createUser: (user: IUser) => Promise<IUser> = async function(user: IUser) {
        try {
            return await User.create(user)
        } catch (err) {
            throw err
        }
    }

    updateUser: (id: ObjectId, changes: Partial<IUser>) => Promise<IUser> = async function(id:ObjectId, changes: Partial<IUser>) {
        try {
            return await User.findByIdAndUpdate(id, {...changes}, {useFindAndModify:false}).exec()
        } catch (err) {
            throw err
        }
    }

    deleteUser: (id: ObjectId) => Promise<DeleteWriteOpResultObject['result']> = async function(id: ObjectId) {
        try {
            let result:DeleteWriteOpResultObject['result'] 
            result = await User.deleteOne({_id:id}).exec()
        if (!result.n) {
           throw new Error("Could not delete the User. Please try again")
        }
        return result
        } catch (err) {
            throw err
        }
    }
}