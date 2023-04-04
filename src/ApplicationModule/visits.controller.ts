import { Controller, Get } from '@nestjs/common';
import { VisitsService } from './visits.service';

@Controller('/visits')
export class VisitsController {
  constructor(private readonly visitsService: VisitsService) {}

  @Get('/')
  findAll() {
    return this.visitsService.findAll();
  }

  @Get('/add')
  create() {
    return this.visitsService.create();
  }

  @Get('/add500')
  create500() {
    return this.visitsService.add500();
  }
}
