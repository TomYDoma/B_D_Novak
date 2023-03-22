import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { Application } from './application.entity';

@Entity('spares')
export class Spares {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column()
  price: number;

  @OneToMany((type) => Application, (application) => application.Spares)
  applications: Application[];
}
