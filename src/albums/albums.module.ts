import { Module } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumsController } from './albums.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [AlbumsController],
  providers: [AlbumsService],
  imports: [PrismaClient],
})
export class AlbumsModule {}
