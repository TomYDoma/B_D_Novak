import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { Visits } from './visits.entity';

@Entity('employee')
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 500,
    default: 'Марина',
  })
  name: string;

  @Column({
    length: 500,
    default: 'Петрова',
  })
  surname: string;

  @Column()
  post: string;

  @OneToMany((type) => Visits, (visits) => visits.Employee)
  visits: Visits[];
}
