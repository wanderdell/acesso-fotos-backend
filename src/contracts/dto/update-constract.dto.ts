import { PartialType } from '@nestjs/swagger';
import { CreateConstractDto } from './create-constract.dto';

export class UpdateConstractDto extends PartialType(CreateConstractDto) {}
