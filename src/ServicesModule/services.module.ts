import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Services } from '../entity/services.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Services])],
  providers: [ServicesService],
  controllers: [ServicesController],
})
export class ServicesModule {}
