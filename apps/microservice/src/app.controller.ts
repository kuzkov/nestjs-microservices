import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  @MessagePattern('hello')
  getHello(name: string): string {
    return `Hello, ${name}`;
  }
}
