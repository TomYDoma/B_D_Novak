import { Module } from '@nestjs/common';
import { VisitsService } from './visits.service';
import { VisitsController } from './visits.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Visits } from '../entity/visits.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Visits])],
  providers: [VisitsService],
  controllers: [VisitsController],
})
export class VisitsModule {}
