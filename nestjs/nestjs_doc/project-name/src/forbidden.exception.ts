import { HttpException } from "@nestjs/common/exceptions";
import { HttpStatus } from "@nestjs/common/enums";

export class ForbiddenException extends HttpException{
    constructor(){
        super("Forbidden", HttpStatus.FORBIDDEN);
    }
}