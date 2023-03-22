import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Spares } from './entity/spares.entity';
import { User } from './entity/user.entity';
import { Application } from './entity/application.entity';
import { Photo } from './entity/photo.entity';
import { PhotoModule } from './PhotoModule/photo.module';
import { UserModule } from './UserModule/user.module';
import { ApplicationModule } from './ApplicationModule/application.module';
import { TechnicModule } from './TechnicModule/technic.module';
import { Technic } from './entity/technic.entity';
import { SparesModule } from './SparesModule/spares.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        entities: [Application, User, Technic, Photo, Spares],
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'goncharov',
        synchronize: true,
        cli: {
          entitiesDir: './entities',
        },
      }),
    }),
    ApplicationModule,
    PhotoModule,
    SparesModule,
    TechnicModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
