import { Module } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumsController } from './albums.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AlbumsController],
  providers: [AlbumsService],
  imports: [PrismaModule],
})
export class AlbumsModule {}
