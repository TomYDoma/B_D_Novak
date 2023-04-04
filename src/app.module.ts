import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entity/employee.entity';
import { User } from './entity/user.entity';
import { Visits } from './entity/visits.entity';
import { Photo } from './entity/photo.entity';
import { PhotoModule } from './PhotoModule/photo.module';
import { UserModule } from './UserModule/user.module';
import { VisitsModule } from './ApplicationModule/visits.module';
import { ServicesModule } from './ServicesModule/services.module';
import { Services } from './entity/services.entity';
import { EmployeeModule } from './EmployeeModule/employee.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        entities: [Visits, User, Employee, Photo, Services],
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'novak',
        synchronize: true,
        cli: {
          entitiesDir: './entities',
        },
      }),
    }),
    VisitsModule,
    PhotoModule,
    EmployeeModule,
    ServicesModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
