import { ListUserService } from "../listUser.interface";
import { User } from "@/mooc/user/domain/entities/User";
import { ListUserRepository, LIST_USER_REPOSITORY } from "@/mooc/user/domain/repositories";
import { Adapter, Service } from "@tsclean/core";

@Service()
export class ListUserUseCase implements ListUserService {
  constructor(@Adapter(LIST_USER_REPOSITORY) private listUserRepository: ListUserRepository) {}

  async listUserService(): Promise<User[]> {
    return this.listUserRepository.list();
  }
}