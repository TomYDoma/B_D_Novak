import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Visits } from './visits.entity';

@Entity('services')
export class Services {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default: 'Окрашивание ногтей',
  })
  name: string;

  @Column({
    default: '1000р',
  })
  cost: string;

  @Column({
    default: 'Описание услуги',
  })
  description: string;

  @OneToMany((type) => Visits, (visits) => visits.Services)
  visits: Visits[];
}
