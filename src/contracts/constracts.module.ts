import { Module } from '@nestjs/common';
import { ConstractsService } from './constracts.service';
import { ConstractsController } from './constracts.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ConstractsController],
  providers: [ConstractsService],
  imports: [PrismaModule],
})
export class ConstractsModule {}
