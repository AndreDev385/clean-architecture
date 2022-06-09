import { User } from "../entities/User";

export const RETRIEVE_USER_REPOSITORY = "RETRIEVE_USER_REPOSITORY";

export interface RetrieveUserRepository {
  retrieve: (id: string) =>  Promise<User>;
}