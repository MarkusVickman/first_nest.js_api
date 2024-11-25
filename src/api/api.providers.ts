
import { DataSource } from 'typeorm';
import { Api } from './entities/api.entity';

export const apiProviders = [
  {
    provide: 'API_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Api),
    inject: ['DATA_SOURCE'],
  },
];