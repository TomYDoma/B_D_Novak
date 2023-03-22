import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Application } from './application.entity';
import { Photo } from './photo.entity';

@Entity('User')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 500,
    default: 'Имя пользователя',
  })
  name: string;

  @Column({
    length: 500,
    default: 'Фамилия пользователя',
  })
  surname: string;

  @Column({
    length: 500,
    default: 'Отчество пользователя',
  })
  patronymic: string;

  @Column({
    default: 'Ростовская обл., г. Новочеркасск, ул. Просвещения, 132',
  })
  address: string;

  @OneToMany((type) => Application, (application) => application.User)
  applications: Application[];

  @OneToMany((type) => Photo, (photo) => photo.Photo)
  Photo: Photo;
}
