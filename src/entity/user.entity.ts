import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Visits } from './visits.entity';
import { Photo } from './photo.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 500,
    default: 'Иван',
  })
  name: string;

  @Column({
    length: 500,
    default: 'Иванов',
  })
  surname: string;

  @Column({
    default: 'Неопределен',
  })
  gender: string;

  @OneToMany((type) => Visits, (visit) => visit.User)
  visits: Visits[];

  @OneToMany((type) => Photo, (photo) => photo.Photo)
  Photo: Photo;
}
