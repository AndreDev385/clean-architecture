import { User } from "../entities/User";

export const LIST_USER_REPOSITORY = "LIST_USER_REPOSITORY";

export interface ListUserRepository {
  list: () =>  Promise<User[]>;
}