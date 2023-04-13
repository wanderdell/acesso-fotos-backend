import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';

import { UsersModule } from './users/users.module';
import { MenuModule } from './menu/menu.module';
import { PhotosModule } from './photos/photos.module';
import { AlbumsModule } from './albums/albums.module';
import { ContractsModule } from './contracts/contracts.module';
import { LogsModule } from './logs/logs.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    MenuModule,
    PhotosModule,
    AlbumsModule,
    ContractsModule,
    LogsModule,
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
