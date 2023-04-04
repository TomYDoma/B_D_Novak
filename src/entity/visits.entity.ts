import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Employee } from './employee.entity';
import { User } from './user.entity';
import { Services } from './services.entity';

@Entity('visit')
export class Visits {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  date: string;

  @Column({ length: 500 })
  time: string;

  @ManyToOne((type) => User, (user) => user.visits)
  User: User;

  @ManyToOne((type) => Services, (services) => services.visits)
  Services: Services;

  @ManyToOne((type) => Employee, (employee) => employee.visits)
  Employee: Employee;

  @Column({ default: 1 })
  userId: number;

  @Column({ default: 1 })
  servicesId: number;

  @Column({ default: 2 })
  employeeId: number;
}
