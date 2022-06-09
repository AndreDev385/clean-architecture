import { User } from "../../domain/entities/User";

export const LIST_USER_SERVICE = "LIST_USER_SERVICE";

export interface ListUserService {
  listUserService:()=> Promise<User[]>;
}