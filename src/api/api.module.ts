import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { DatabaseModule } from './databases/database.module';
import { apiProviders } from './api.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ApiController],
  providers: [...apiProviders, ApiService],
})
export class ApiModule {}
