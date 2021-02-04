import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor() {}

  @MessagePattern('hello')
  getHello(name: string): string {
    return `Hi, ${name}`;
  }
}
