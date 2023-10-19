import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent){
    console.log('handlerUserCreated - COMMUNICATION', data)
  }
}
