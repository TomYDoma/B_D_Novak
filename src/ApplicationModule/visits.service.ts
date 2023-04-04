import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Visits } from '../entity/visits.entity';

@Injectable()
export class VisitsService {
  constructor(
    @InjectRepository(Visits)
    private visitsRepository: Repository<Visits>,
  ) {}

  async findAll(): Promise<Visits[]> {
    return this.visitsRepository.find();
  }

  async add500() {
    for (let i = 2; i < 500000; i++) {
      console.log(i);
      await this.create();
    }
  }

  async create(): Promise<Visits> {
    return this.visitsRepository.save({
      date: '01.01.2023',
      time: '10:30',
    });
  }
}
