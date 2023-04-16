import { Controller, Get } from '@nestjs/common';
import { SchedulersService } from './schedulers.service';

@Controller()
export class SchedulersController {
  constructor(private readonly schedulersService: SchedulersService) {}

  @Get()
  getHello(): string {
    return this.schedulersService.getHello();
  }
}
