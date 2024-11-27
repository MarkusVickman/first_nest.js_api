import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

//Ett schema för en MySql tabell. Inte så mycket att säga mer än att den skapas enligt dessa specs i MySql-databasen.
//TYPEORM ger säkerhet mot SQL-injektioner.
@Entity()
export class Api {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

  @Column('int')
  set: number;

  @Column('int')
  rep: number;

  @Column({ default: false })
  isCompleted: boolean;
}