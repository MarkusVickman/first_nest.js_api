  import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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