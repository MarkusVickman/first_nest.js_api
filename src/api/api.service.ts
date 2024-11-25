import { Injectable, Inject } from '@nestjs/common';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';
import { Repository } from 'typeorm';
import { Api } from './entities/api.entity';

@Injectable()
export class ApiService {



  constructor(
    @Inject('API_REPOSITORY')
    private apiRepository: Repository<Api>,
  ) {}



  create(createApiDto: CreateApiDto) {
    return 'This action adds a new api';
  }

  /*findAll() {
    return `This action returns all api`;
  }*/

  async findAll(): Promise<Api[]> {
    return this.apiRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} api`;
  }

  update(id: number, updateApiDto: UpdateApiDto) {
    return `This action updates a #${id} api`;
  }

  remove(id: number) {
    return `This action removes a #${id} api`;
  }
}
