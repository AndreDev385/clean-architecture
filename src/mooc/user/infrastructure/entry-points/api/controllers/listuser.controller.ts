import {
  ListUserService,
  LIST_USER_SERVICE,
} from "@/mooc/user/application/use-cases/listUser.interface";
import { Adapter, Get, Mapping } from "@tsclean/core";

@Mapping('user/list')
export class ListUserController implements ListUserService {
  constructor(@Adapter(LIST_USER_SERVICE) private readonly listUser: ListUserService) {}

  @Get()
  async listUserService() {
    const users = await this.listUser.listUserService();
    return users;
  }
}
