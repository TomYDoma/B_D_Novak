import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Services } from '../entity/services.entity';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Services)
    private servicesRepository: Repository<Services>,
  ) {}

  async findAll(): Promise<Services[]> {
    return this.servicesRepository.find();
  }

  async add500() {
    for (let i = 2; i < 500000; i++) {
      console.log(i);
      await this.create();
    }
  }

  async create(): Promise<Services> {
    return this.servicesRepository.save({
      name: 'Окрашивание ногтей',
    });
  }
}
