import { User, AddUserParams } from "@/mooc/user/domain/entities/User";
import {
  CreateUserRepository,
  ListUserRepository,
  RetrieveUserRepository,
  UpdateUserRepository,
} from "@/mooc/user/domain/repositories";
import { UserModel } from "./models/user";

export class UserMongooseRepositoryAdapter
  implements
    CreateUserRepository,
    ListUserRepository,
    RetrieveUserRepository,
    UpdateUserRepository
{
  async list(): Promise<User[]> {
    return UserModel.find();
  }

  async create(user: AddUserParams): Promise<User> {
    const newUser = new UserModel(user);
    return newUser.save();
  }

  async retrieve(id: string): Promise<User> {
    return UserModel.findById(id);
  }

  async update(id: string, user: User): Promise<User> {
    return UserModel.findByIdAndUpdate(id, user, { new: true });
  }

  async destroy(id: string): Promise<void> {
    return UserModel.findByIdAndDelete(id);
  }
}
