import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Technic } from '../entity/technic.entity';

@Injectable()
export class TechnicService {
  constructor(
    @InjectRepository(Technic)
    private typeRepository: Repository<Technic>,
  ) {}

  async findAll(): Promise<Technic[]> {
    return this.typeRepository.find();
  }

  async add500() {
    for (let i = 2; i < 500000; i++) {
      console.log(i);
      await this.create();
    }
  }

  async create(): Promise<Technic> {
    return this.typeRepository.save({
      name: 'Техника клиента',
    });
  }
}
