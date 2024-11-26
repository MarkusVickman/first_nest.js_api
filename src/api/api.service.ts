import { Injectable, Inject, NotFoundException } from '@nestjs/common';
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

  async create(message: CreateApiDto): Promise<Api> { 

  const response = this.apiRepository.save(this.apiRepository.create(message));
  if (!response) { throw new NotFoundException('POST: Create post failed..'); }
  return response;
  }

  async findAll(): Promise<Api[]> {
    let response = await this.apiRepository.find();
    if (!response) { throw new NotFoundException('GET: Find all failed.'); }
    return response;
  }

  async findOne(id: number): Promise<Api> {
    let response = await this.apiRepository.findOne({ where: { id } });
    if (!response) { throw new NotFoundException('GET: Find one failed.'); }
    return response;
  }

  async update(id: number, message: UpdateApiDto): Promise<Api> {
  const response = await this.apiRepository.findOne({ where: { id } });

  if (!response) { throw new NotFoundException('PUT: Update failed.'); }
  
  return await this.apiRepository.save(Object.assign(response, message));
  }
  
  async remove(id: number) {

    if (!await this.apiRepository.findOne({ where: { id } })){
      throw new NotFoundException('DELETE: delete failed.');
    }

    this.apiRepository.delete(id);

    return `Delete ${id} completed`;
  }
}
