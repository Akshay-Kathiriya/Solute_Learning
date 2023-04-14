import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { LoggerMiddleware } from './logger.middleware';
import { CatsModule } from './cats/cats.module';


//For Cutom Providers
const mockCatsService = {
  
}

@Module({
  imports: [CatsModule],
  providers:[
    {
      provide: CatsService,
      useValue: mockCatsService,
    },
  ]
})


export  class AppModule{} 






// @Module({
//   imports: [CatsModule],
//   controllers: [AppController, CatsController],
//   providers: [AppService, CatsService],

// })




//add comment ...
// export class AppModule implements NestModule{

//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(LoggerMiddleware)
//     .exclude(
//       {path:'cats', method: RequestMethod.GET},
//       {path: 'cats', method: RequestMethod.POST},
//       'cats/(.*)',
//     ).forRoutes(CatsController);
//     // .forRoutes({path: 'cats', method: RequestMethod.GET});
//   }

// }
