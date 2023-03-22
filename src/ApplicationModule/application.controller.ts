import { Controller, Get } from '@nestjs/common';
import { ApplicationService } from './application.service';

@Controller('/application')
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {}

  @Get('/')
  findAll() {
    return this.applicationService.findAll();
  }

  @Get('/add')
  create() {
    return this.applicationService.create();
  }

  @Get('/add500')
  create500() {
    return this.applicationService.add500();
  }
}
