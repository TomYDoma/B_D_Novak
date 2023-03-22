import { Controller, Get } from '@nestjs/common';
import { TechnicService } from './technic.service';

@Controller('/technic')
export class TechnicController {
  constructor(private readonly technicService: TechnicService) {}

  @Get('/')
  findAll() {
    return this.technicService.findAll();
  }

  @Get('/add')
  create() {
    return this.technicService.create();
  }

  @Get('/add500')
  create500() {
    return this.technicService.add500();
  }
}
