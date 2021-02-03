import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

const logger = new Logger("Microservice");

const microserviceOptions: MicroserviceOptions = {
  transport: Transport.TCP,
  options: {
    host: 'microservice',
    port: 8080,
  }
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);
  await app.listen(() => logger.log('Started'));
}

bootstrap();
