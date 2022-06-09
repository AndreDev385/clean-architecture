import {
  CreateUserRepository,
  CREATE_USER_REPOSITORY,
} from "@/mooc/user/domain/repositories";
import { CreateUserService } from "../createUser.interface";
import { User, AddUserParams } from "@/mooc/user/domain/entities/User";
import { Adapter, Service } from "@tsclean/core";

@Service()
export class CreateUserUseCase implements CreateUserService {
  constructor(
    @Adapter(CREATE_USER_REPOSITORY)
    private createUserRepository: CreateUserRepository
  ) {}

  async createUserService(user: AddUserParams): Promise<User> {
    return this.createUserRepository.create(user);
  }
}
