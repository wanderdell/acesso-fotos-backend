import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateAlbumDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  cod_album_alb: number;

  @ApiProperty()
  @IsNotEmpty()
  @Length(5, 240)
  des_album_alb: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(5, 240)
  obs_album_alb: string;

  @ApiProperty()
  @IsNotEmpty()
  dta_evento_alb: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  cod_situ_alb: number;

  @ApiProperty()
  @IsNotEmpty()
  @Length(5, 240)
  cod_cliente: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  album_id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  contract_id: number;
}
