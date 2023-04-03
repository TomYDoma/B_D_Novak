import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Application } from './application.entity';

@Entity('technic')
export class Technic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default: 'Название техники',
  })
  name: string;

  @Column({
    default: 'Описание неисправностей',
  })
  description: string;

  @OneToMany((type) => Application, (application) => application.Technic)
  applications: Application[];
}
