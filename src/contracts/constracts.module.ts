import { Module } from '@nestjs/common';
import { ConstractsService } from './constracts.service';
import { ConstractsController } from './constracts.controller';

@Module({
  controllers: [ConstractsController],
  providers: [ConstractsService]
})
export class ConstractsModule {}
