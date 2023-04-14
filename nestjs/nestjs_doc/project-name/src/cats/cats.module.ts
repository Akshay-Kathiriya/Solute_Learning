import { Global, Module } from "@nestjs/common/decorators";
import { CatsController } from "./cats.controller";
import { CatsService } from "./cats.service";

// @Global() //make the module global with the @Global() decorator.


@Module({
    controllers: [CatsController],
    providers: [CatsService],
    exports: [CatsService]
})

export class CatsModule {
    // constructor(private catService: CatsService){}  // we can inject providers inside modules, However, module classes themselves cannot be injected as providers due to circular dependency .

}