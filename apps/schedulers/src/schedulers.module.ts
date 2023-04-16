import { Module } from '@nestjs/common';
import { SchedulersController } from './schedulers.controller';
import { SchedulersService } from './schedulers.service';

@Module({
  imports: [],
  controllers: [SchedulersController],
  providers: [SchedulersService],
})
export class SchedulersModule {}
