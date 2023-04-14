import { Inject, Injectable, Module } from '@nestjs/common';
import { UsersController } from './User/users.controller';
import { UsersStore } from './User/users.store';
import { Store } from './User/store'

import {BehaviorSubject, ReplaySubject} from 'rxjs';



// @Module({
//   imports: [],
//   controllers: [UsersController],
//   // providers: [{
//   //   provide: "STORE",
//   //   useClass: UsersStore
//   // }],

//   // providers: [
//   //   // UsersStore, { provide: Store, useClass: UsersStore} // Create separete instacne of UsersStore
//   //   UsersStore, { provide: Store, useExisting: UsersStore} // Create common instance for bot UserStore 
//   // ]


//   // providers: [
//   //   {provide: 'DATABASE_NAME',   useValue: 'MOON_KNIGHT'},
//   //   {provide: 'MAIL', useValue:['admin@domain.com','noreply@domain.com']},
//   // ] // we can also use object also in useValue


// })






// Dynamic Providers  

// const IS_DEV_MODE = true;

// @Injectable()
// class EnvConfig{
//   envType: "DEV" | "STAGE" | "PROD";

//   constructor(){
//     this.envType = "DEV";
//   }
// }

// @Module({
//   imports: [],
//   controllers: [UsersController],

//   providers: [
//     {
//       provide: "EVENT_STORE",
//       useFactory: (config: EnvConfig, limit: number) => {
//         const eventBus$ = IS_DEV_MODE 
//         ? new ReplaySubject(2) 
//         : new BehaviorSubject(null)
//         console.log(config);
//         console.log(limit);
//         return eventBus$;
//       },
//       // inject: ['LIMIT']
//       inject: [EnvConfig, {token: 'LIMIT', optional:true}],
//     },
//     {
//       provide: 'LIMIT',
//       useValue: 2,
//     },
//     EnvConfig,
//   ]

// })




// Async providers

function createConnection(options){
  return Promise.resolve('connected');
}

@Module({
  controllers: [UsersController],
  providers:[
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async (options) => {
        const connection = await createConnection(options);
        return connection;
       },
      inject: ['DB_OPTIONS'],
    },
    {
      provide: 'DB_OPTIONS',
      useValue:{ url:'', user:'', password:''},
    },
  ],
})


export class AppModule { }
