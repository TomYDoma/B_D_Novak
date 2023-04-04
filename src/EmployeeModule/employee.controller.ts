import { Controller, Get } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('/employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get('/')
  findAll() {
    return this.employeeService.findAll();
  }

  @Get('/add')
  create() {
    return this.employeeService.create();
  }

  @Get('/add500')
  create500() {
    return this.employeeService.add500();
  }
}
