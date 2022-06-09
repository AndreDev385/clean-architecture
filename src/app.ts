import {Container} from "@tsclean/core";
import {controllers} from "./mooc/user/infrastructure/entry-points/api/controllers";
import {services, adapters} from "./mooc/user/infrastructure/driven-adapters/providers"

@Container({
    providers: [...services, ...adapters],
    controllers: [...controllers]
})

export class AppContainer {}
