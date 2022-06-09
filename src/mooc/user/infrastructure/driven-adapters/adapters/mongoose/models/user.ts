import { User } from "@/mooc/user/domain/entities/User";
import { model, Schema } from 'mongoose'

const schema = new Schema<User>({
  username: {type: String, require: true},
  password: {type: String, require: true},
  email: {type: String, require: true},
})

export const UserModel = model<User>('User', schema)