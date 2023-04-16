import { NestFactory } from '@nestjs/core';
import { SchedulersModule } from './schedulers.module';

async function bootstrap() {
  const app = await NestFactory.create(SchedulersModule);
  await app.listen(3000);
}
bootstrap();
