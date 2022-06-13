import { ListUserService } from "../listUser.interface";
import { User } from "@/mooc/user/domain/entities/User";
import {
  USER_REPOSITORY,
  UserRepository,
} from "@/mooc/user/domain/repositories";
import { Adapter, Service } from "@tsclean/core";

@Service()
export class ListUserUseCase implements ListUserService {
  constructor(
    @Adapter(USER_REPOSITORY) private listUserRepository: UserRepository
  ) {}

  async listUserService(): Promise<User[]> {
    return this.listUserRepository.list();
  }
}
