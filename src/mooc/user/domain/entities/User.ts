export interface User {
  id: string;
  email: string;
  username: string;
  password: string;
}

export type AddUserParams = Omit<User, 'id'>