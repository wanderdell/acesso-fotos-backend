import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, Length } from 'class-validator';
export class CreateAlbumDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @Length(5, 240)
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(5, 240)
  observation: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(5, 240)
  delivey_date: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(5, 240)
  album_date: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(5, 240)
  situation: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  user_id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  album_id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  contract_id: number;
}
