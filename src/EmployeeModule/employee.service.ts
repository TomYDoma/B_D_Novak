import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from '../entity/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  async add500() {
    for (let i = 2; i < 500000; i++) {
      console.log(i);
      await this.create();
    }
  }

  async create(): Promise<Employee> {
    return this.employeeRepository.save({
      post: 'Должность',
    });
  }
}
