import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { Application } from '../entity/application.entity';

@Injectable()
export class ApplicationService {
  constructor(
    @InjectRepository(Application)
    private orderRepository: Repository<Application>,
  ) {}

  async findAll(): Promise<Application[]> {
    return this.orderRepository.find();
  }

  async add500() {
    for (let i = 2; i < 500000; i++) {
      console.log(i);
      await this.create();
    }
  }

  async create(): Promise<Application> {
    return this.orderRepository.save({
      name: 'Заказ на ремонт видеокарты',
    });
  }
}
