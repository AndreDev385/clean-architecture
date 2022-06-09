import { User } from "../../domain/entities/User";
import { AddUserParams } from "../../domain/entities/User";

export const CREATE_USER_SERVICE = "CREATE_USER_SERVICE";

export interface CreateUserService {
  createUserService: (user: AddUserParams) => Promise<User>;
}