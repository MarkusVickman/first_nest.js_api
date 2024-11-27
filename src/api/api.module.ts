import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { DatabaseModule } from './databases/database.module';
import { apiProviders } from './api.providers';

//Sammanställer och exporterar min crud api med endpoint /api till en modul 
//som används i app.module-filen för att köra när appen startar
@Module({
  imports: [DatabaseModule],
  controllers: [ApiController],
  providers: [...apiProviders, ApiService],
})
export class ApiModule { }
