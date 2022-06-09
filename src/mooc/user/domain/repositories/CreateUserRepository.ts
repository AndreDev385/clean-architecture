import { User, AddUserParams } from "../entities/User";

export const CREATE_USER_REPOSITORY = "CREATE_USER_REPOSITORY";

export interface CreateUserRepository {
  create: (user: AddUserParams) =>  Promise<User>;
}