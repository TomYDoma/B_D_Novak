import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from '../entity/photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private photoRepository: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    return this.photoRepository.find();
  }

  async add500() {
    for (let i = 1; i < 500000; i++) {
      console.log(i);
      await this.create();
    }
  }

  async create(): Promise<Photo> {
    return this.photoRepository.save({
      name: 'Имя файла',
    });
  }
}
