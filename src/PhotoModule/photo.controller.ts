import { Controller, Get } from '@nestjs/common';
import { PhotoService } from './photo.service';

@Controller('/photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get('/')
  findAll() {
    return this.photoService.findAll();
  }

  @Get('/add')
  create() {
    return this.photoService.create();
  }

  @Get('/add500')
  create500() {
    return this.photoService.add500();
  }
}
