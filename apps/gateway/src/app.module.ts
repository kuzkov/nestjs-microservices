import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [ClientsModule.register([{
    name: 'MICROSERVICE',
    transport: Transport.TCP,
    options: {
      host: 'microservice',
      port: 8080,
    },
  }])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
