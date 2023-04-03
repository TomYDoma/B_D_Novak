import { Module } from '@nestjs/common';
import { SparesService } from './spares.service';
import { SparesController } from './spares.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Spares } from '../entity/spares.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Spares])],
  providers: [SparesService],
  controllers: [SparesController],
})
export class SparesModule {}
