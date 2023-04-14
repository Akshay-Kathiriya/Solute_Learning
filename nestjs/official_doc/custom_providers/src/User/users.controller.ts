import {Controller, Inject} from '@nestjs/common';
import {UsersStore} from './users.store';
import {Store} from './store'
import { Subject } from 'rxjs';

// @Controller('/users')
// export class UsersController{
//     //@Inject is useful when token name is different then class in modules which is other string or symbol.
//     // constructor(@Inject(UsersStore)private store: UsersStore){

//     // constructor(private store: Store){
//     //     console.log("Inside Controller contructor ",this.store);
//     // }   


//     // for Value provider ex.
//     constructor(@Inject("DATABASE_NAME")private dbname: string, @Inject('MAIL')private mails:string[]){
//         console.log(this.dbname)
//         console.log(this.mails)
//     }   


// }







// For Dynamic providers
// @Controller('/users')
// export class UsersController{
//     constructor(@Inject('EVENT_STORE')private eventbus: Subject<any>){
//         console.log(this.eventbus);
//     }
// }






//For Async providers
@Controller('/users')
export class UsersController{
    constructor(@Inject('DATABASE_CONNECTION')private connection : any){
        console.log(this.connection);
    }
}