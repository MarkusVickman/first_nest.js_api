import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';
import { Repository } from 'typeorm';
import { Api } from './entities/api.entity';

//Klass med metoder för att kontakta databasen och returnera svar.
//Vid retur av flera databas objekt används för retur, : Promise<[]> eller Promise<> om ett objekt.
//Felkoder och kontroller av inmatade fälld görs här genom .dto.ts-classerna. Felkoderna skapas delvis automatiskt av import modulen NotFoundException.
@Injectable()
export class ApiService {

  constructor(
    @Inject('API_REPOSITORY')
    private apiRepository: Repository<Api>,
  ) { }

  async create(message: CreateApiDto): Promise<Api> {
    //Skapar ett objekt med alla variabler och sparar in objeket i databasen
    const response = this.apiRepository.save(this.apiRepository.create(message));
    //Vid fel skickas ett felmeddelande som svar istället
    if (!response) { throw new NotFoundException('POST: Create post failed..'); }
    return response;
  }

  async findAll(): Promise<Api[]> {
    //Hämtar object från databasen
    let response = await this.apiRepository.find();
    //Vid fel skickas ett felmeddelande som svar istället
    if (!response) { throw new NotFoundException('GET: Find all failed.'); }
    return response;
  }

  async findOne(id: number): Promise<Api> {
    //Hämtar object från databasen
    let response = await this.apiRepository.findOne({ where: { id } });
    //Vid fel skickas ett felmeddelande som svar istället
    if (!response) { throw new NotFoundException('GET: Find one failed.'); }
    return response;
  }

  async update(id: number, message: UpdateApiDto): Promise<Api> {
    //Uppdaterar ett objekt 
    const response = await this.apiRepository.findOne({ where: { id } });
    //Vid fel skickas ett felmeddelande som svar istället
    if (!response) { throw new NotFoundException('PUT: Update failed.'); }
    return await this.apiRepository.save(Object.assign(response, message));
  }

  async remove(id: number) {
    // skickar felmeddelande om if inte finns
    if (!await this.apiRepository.findOne({ where: { id } })) {
      throw new NotFoundException('DELETE: delete failed.');
    }
    //Tar bort valt id
    this.apiRepository.delete(id);
    return `Delete ${id} completed`;
  }
}
