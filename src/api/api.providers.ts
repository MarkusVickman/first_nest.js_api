
import { DataSource } from 'typeorm';
import { Api } from './entities/api.entity';

//skapar Api repository med hjälp av import modulen DataSource från typeorm
//Exporterar en datasource med hjälp av classen/schemat Api 
export const apiProviders = [
  {
    provide: 'API_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Api),
    inject: ['DATA_SOURCE'],
  },
];