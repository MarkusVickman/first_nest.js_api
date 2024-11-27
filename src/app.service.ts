import { Injectable } from '@nestjs/common';

//class som innehåller svar för routes i app.controller
@Injectable()
export class AppService {
  getHello(): string {
    return '<h1>Hello Welcome to this Nest.Js API. Try endpoint /api instead!<h1>';
  }
}
