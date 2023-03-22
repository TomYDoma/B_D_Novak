import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Spares } from './spares.entity';
import { User } from './user.entity';
import { Technic } from './technic.entity';

@Entity('application')
export class Application {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @ManyToOne((type) => User, (user) => user.applications)
  User: User;

  @ManyToOne((type) => Technic, (technic) => technic.applications)
  Technic: Technic;

  @ManyToOne((type) => Spares, (spares) => spares.applications)
  Spares: Spares;

  @Column({ default: 1 })
  userId: number;

  @Column({ default: 1 })
  technicId: number;

  @Column({ default: 2 })
  sparesId: number;
}
