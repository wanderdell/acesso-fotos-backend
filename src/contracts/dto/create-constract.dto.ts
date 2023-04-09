import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateConstractDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @Length(5, 240)
  client: string;

  @ApiProperty()
  @IsNotEmpty()
  event_date: Date;

  @ApiProperty()
  @IsNotEmpty()
  delivey_date: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  id_anexo: number;

  @ApiProperty()
  @IsNotEmpty()
  @Length(5, 240)
  event_place: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  user_id;
}
