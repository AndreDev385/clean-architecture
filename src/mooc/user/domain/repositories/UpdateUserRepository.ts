import { User } from "../entities/User";

export const UPDARE_USER_REPOSITORY = "UPDATE_USER_REPOSITORY";

export interface UpdateUserRepository {
  update: (id:string, user: User) => Promise<User>;
}