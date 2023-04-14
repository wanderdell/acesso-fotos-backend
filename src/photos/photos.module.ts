import { Module } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { PhotosController } from './photos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PhotosController],
  providers: [PhotosService],
  imports: [PrismaModule],
})
export class PhotosModule {}
