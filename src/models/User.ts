import mongoose, { Schema, Document, Model, model } from 'mongoose'

export interface IUser extends Document {
    email: string,
    password: string,
    choices: Array<string>
}

const UserSchema: Schema = new Schema<IUser>({
    email: {type: String, required: true, unique: true },
    password: { type: String, required: true},
    choices: [{ type: String, required: false}]
})

export default model<IUser>('User', UserSchema)