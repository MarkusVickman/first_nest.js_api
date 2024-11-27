import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//Controller med route för endpoint /
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //Get route med endpoin /
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
