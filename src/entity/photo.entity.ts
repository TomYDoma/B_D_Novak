import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default: 'Имя файла',
  })
  name: string;

  @Column({
    default: 'Путь к файлу',
  })
  path: string;

  @ManyToOne((type) => User, (user) => user.applications)
  Photo: Photo;

  @Column({ default: 2 })
  photoId: number;
}
