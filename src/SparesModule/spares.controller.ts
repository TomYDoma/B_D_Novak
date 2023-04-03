import { Controller, Get } from '@nestjs/common';
import { SparesService } from './spares.service';

@Controller('/spares')
export class SparesController {
  constructor(private readonly sparesService: SparesService) {}

  @Get('/')
  findAll() {
    return this.sparesService.findAll();
  }

  @Get('/add')
  create() {
    return this.sparesService.create();
  }

  @Get('/add500')
  create500() {
    return this.sparesService.add500();
  }
}
