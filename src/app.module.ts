import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { ConfigModule } from '@nestjs/config';

//Modul som används för att initiera app men ännu bättre! min /api endpoint. Kanske hade varit snyggare att ha det här direkt i main.ts
//Modelen exporteras och implementeras i main.ts
@Module({
  imports: [ApiModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
