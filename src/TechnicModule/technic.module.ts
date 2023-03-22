import { Module } from '@nestjs/common';
import { TechnicService } from './technic.service';
import { TechnicController } from './technic.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Technic } from '../entity/technic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Technic])],
  providers: [TechnicService],
  controllers: [TechnicController],
})
export class TechnicModule {}
