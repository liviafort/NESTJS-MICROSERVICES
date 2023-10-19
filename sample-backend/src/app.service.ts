import { Injectable, Inject } from '@nestjs/common';
import { CreateUserRequests } from './create-user-request.dto';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {

  private readonly users: any[] = [];
  constructor(
    @Inject('COMMUNICATION') private readonly communicationClient: ClientProxy
    @Inject('ANALYTICS') private readonly communicationClient: ClientProxy
  ){}
  
  getHello(): string {
    return 'Hello World!';
  }

  createUser(createUserRequests: CreateUserRequests){
    this.users.push(CreateUserRequests);
    this.communicationClient.emit(
      'user_created', 
      new CreateUserEvent(createUserRequests.email)
    )
  }
}
