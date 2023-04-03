import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Spares } from '../entity/spares.entity';

@Injectable()
export class SparesService {
  constructor(
    @InjectRepository(Spares)
    private typeRepository: Repository<Spares>,
  ) {}

  async findAll(): Promise<Spares[]> {
    return this.typeRepository.find();
  }

  async add500() {
    for (let i = 2; i < 500000; i++) {
      console.log(i);
      await this.create();
    }
  }

  async create(): Promise<Spares> {
    return this.typeRepository.save({
      name: 'Наименование запчасти',
      price: 1500,
    });
  }
}
