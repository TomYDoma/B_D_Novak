import { Controller, Get } from '@nestjs/common';
import { ServicesService } from './services.service';

@Controller('/services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get('/')
  findAll() {
    return this.servicesService.findAll();
  }

  @Get('/add')
  create() {
    return this.servicesService.create();
  }

  @Get('/add500')
  create500() {
    return this.servicesService.add500();
  }
}
