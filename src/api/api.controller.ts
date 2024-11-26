import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ApiService } from './api.service';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Post()
  create(@Body() message: CreateApiDto) {
    return this.apiService.create(message);
  }

  @Get()
  findAll() {
    return this.apiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apiService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() message: UpdateApiDto) {
    return this.apiService.update(+id, message);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apiService.remove(+id);
  }
}
