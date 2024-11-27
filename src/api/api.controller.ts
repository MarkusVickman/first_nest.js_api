import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiService } from './api.service';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';

//Controller för CRUD för rounten /api
@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) { }

  //Alla postanrop till /api initierar create-metoden i api.service. Body parametrar skickas med som argument enligt CreateApiDto-classen
  @Post()
  create(@Body() message: CreateApiDto) {
    return this.apiService.create(message);
  }

  //Alla getanrop till /api initierar findAll-metoden i api.service.
  @Get()
  findAll() {
    return this.apiService.findAll();
  }

  //Alla getanrop till /api/id initierar findOne-metoden i api.service. Id skickas med som "adressrads"-parameter skickas med som argument
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apiService.findOne(+id);
  }

  //Alla putanrop till /api/id initierar update-metoden i api.service. Body parametrar skickas med som argument enligt UpdateApiDto-classen. Id skickas med som "adressrads"-parameter skickas med som argument
  @Put(':id')
  update(@Param('id') id: string, @Body() message: UpdateApiDto) {
    return this.apiService.update(+id, message);
  }

  //Alla deleteanrop till /api/id initierar remote-metoden i api.service. Id skickas med som "adressrads"-parameter skickas med som argument
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apiService.remove(+id);
  }
}
