import {
  CreateUserService,
  CREATE_USER_SERVICE,
} from "@/mooc/user/application/use-cases/createUser.interface";
import {
  ListUserService,
  LIST_USER_SERVICE,
} from "@/mooc/user/application/use-cases/listUser.interface";
import { AddUserParams } from "@/mooc/user/domain/entities/User";
import { Adapter, Body, Get, Mapping, Post } from "@tsclean/core";

@Mapping("user/list")
export class ListUserController implements ListUserService {
  constructor(
    @Adapter(LIST_USER_SERVICE) private readonly listUser: ListUserService,
    @Adapter(CREATE_USER_SERVICE) private readonly createUser: CreateUserService
  ) {}

  @Get()
  async listUserService() {
    const users = await this.listUser.listUserService();
    return users;
  }

  @Post()
  async createUserService(@Body() user: AddUserParams) {
    const createdUser = await this.createUser.createUserService(user);
    return createdUser;
  }
}
