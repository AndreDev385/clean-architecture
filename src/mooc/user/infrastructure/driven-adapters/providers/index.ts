import { CREATE_USER_SERVICE } from "@/mooc/user/application/use-cases/createUser.interface";
import { CreateUserUseCase } from "@/mooc/user/application/use-cases/impl/CreateUserUseCase";
import { ListUserUseCase } from "@/mooc/user/application/use-cases/impl/ListUserUseCase";
import { LIST_USER_SERVICE } from "@/mooc/user/application/use-cases/listUser.interface";
import { CREATE_USER_REPOSITORY, LIST_USER_REPOSITORY, RETRIEVE_USER_REPOSITORY, UPDARE_USER_REPOSITORY } from "@/mooc/user/domain/repositories";
import { UserMongooseRepositoryAdapter } from "../adapters/mongoose/UserMongooseRepositoryAdapter";

export const adapters = [
  {
    provide: CREATE_USER_REPOSITORY,
    useClass: UserMongooseRepositoryAdapter,
  },
  {
    provide: LIST_USER_REPOSITORY,
    useClass: UserMongooseRepositoryAdapter,
  },
  {
    provide: UPDARE_USER_REPOSITORY,
    useClass: UserMongooseRepositoryAdapter,
  },
  {
    provide: RETRIEVE_USER_REPOSITORY,
    useClass: UserMongooseRepositoryAdapter,
  },
];

export const services = [
  {
    provide: LIST_USER_SERVICE,
    useClass: ListUserUseCase,
  },
  {
    provide: CREATE_USER_SERVICE,
    useClass: CreateUserUseCase,
  }
];
