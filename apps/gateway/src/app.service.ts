import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('MICROSERVICE') private client: ClientProxy) {}

  getHello() {
    return this.client.send('hello', 'Artyom');
  }
}
