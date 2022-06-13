import { User, AddUserParams } from "../entities/User";

export const USER_REPOSITORY = "USER_REPOSITORY";

export interface UserRepository {
  list: () => Promise<User[]>;
  create: (user: AddUserParams) => Promise<User>;
  retrieve: (id: string) => Promise<User>;
  update: (id: string, user: User) => Promise<User>;
  destroy: (id: string) => Promise<void>;
}