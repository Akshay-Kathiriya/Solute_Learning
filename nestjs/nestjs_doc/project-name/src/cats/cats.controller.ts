import { Controller,Body, Get, Header, HostParam, HttpCode, Param, Post, Redirect, Req, Query, Put, Delete, Res, HttpStatus, HttpException, ForbiddenException, UseFilters } from '@nestjs/common'
import { AppService } from '../app.service'
import { Request, Response } from 'express'
import { Observable, of } from 'rxjs';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interface/cat.interface';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from 'src/http-exception.filter';

// @Controller({ host: ':account.example.com' })
@Controller('cats')
export class CatsController {


// ====== Without Controller(services) =======
//     @Post()
//     // @HttpCode(204)
//     // @Header('Cache-Control', 'none')
//     // @Redirect('https://nestjs.com', 301)
//     createt(): string {
//         return "This action adds a new cat."
//     }

//     @Post()
//     rcreate(@Res() res:Response){
//         res.status(HttpStatus.CREATED).send();
//     }

//     // @Get()
//     // async asyncfindAll():Promise<any[]>{
//     //     return [];
//     // }


//      @Get()
//     RxJSfindAll():Observable<any[]>{
//         return of([]);
//     }


// //     @Get('info')
// //     getInfo(@HostParam('account') account: string) {
// //     return account;
// //   }

//     @Get(':id')
//     // findOne(@Param() params): string 
//     findOne(@Param('id') id: string): string {
//         // console.log(params.id);
//         // return `This action returns a #${params.id} cat`;
//         console.log(id);
//         return `This action returns a ##${id} cat`;
//     }

//     @Get()
//     findAll(@Req() request: Request): string{
//         // findAll(@Query() query: ListAllEntities) {
//         return 'This action result all cats.'
//     }



//     @Post()
//     create(@Body() createCatDto: CreateCatDto){
//         return 'This action adds a new cat';
//     }

//     //need to define UpdateCatDto schema
//     // @Put(':id')
//     // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
//     //   return `This action updates a #${id} cat`;
//     // }


//     @Delete(':id')
//     remove(@Param('id') id: string) {
//       return `This action removes a #${id} cat`;
//     }
//============================================================


  constructor(private catsService: CatsService){}
  
  @Post()
  @UseFilters(new HttpExceptionFilter())
  async create(@Body() createCatDto : CreateCatDto){
    // this.catsService.create(createCatDto);
    throw new ForbiddenException();
  }

  // @Get()
  // async findAll(): Promise<Cat[]>{
    // return this.catsService.findAll();
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN); // Exception filter -> Throwing starndard exceptions

    
  @Get()
  async findAll(): Promise<Cat[]>{
    return this.catsService.findAll();
  }

    
  //   @Get()
  //   async findAll(){
  //   try{
  //     await this.catsService.findAll()
  //   }catch(error){
  //       throw new HttpException({
  //         status:HttpStatus.FORBIDDEN,
  //         error: 'This is a custom message',
  //       },HttpStatus.FORBIDDEN,{
  //         cause:error
  //       })
  //   }
  // }


      // @Get()
      // async findAll(){
      //   throw new ForbiddenException();
      // }

}