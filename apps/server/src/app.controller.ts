import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateNinjaDto } from './dto/create-ninja.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getNinjas(): any {
    return this.appService.getNinjas();
  }
  @Get(':id')
  getOneNinja(@Param('id') id: string): Record<string, any> {
    try {
      const ninja = this.appService.getNinjaById(+id);

      if (!ninja) {
        //TODO: throw an 4XX error
      }

      return {
        data: ninja,
        id,
      };
    } catch (err) {
      throw new Error(err);
    }
  }

  @Post()
  createNinja(@Body() ninja: CreateNinjaDto): Record<string, any> {
    const record = this.appService.createNinja(ninja);

    if (!record) {
      //TODO: throw an 4XX error
    }

    return {
      success: true,
      data: record,
    };
  }
}
