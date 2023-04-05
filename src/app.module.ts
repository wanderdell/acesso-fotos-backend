import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { MenuModule } from './menu/menu.module';
import { ContractsModule } from './contracts/contracts.module';
import { ConstractsModule } from './constracts/constracts.module';
import { LogsModule } from './logs/logs.module';
import { PhotosModule } from './photos/photos.module';
import { AlbumsModule } from './albums/albums.module';

@Module({
  imports: [PrismaModule, UsersModule, MenuModule, ContractsModule, ConstractsModule, LogsModule, PhotosModule, AlbumsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
