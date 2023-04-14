import { ApiProperty } from '@nestjs/swagger';

export class CreatePhotoDto {
  @ApiProperty()
  cod_foto_caf: number;

  @ApiProperty()
  cod_album_caf: number;

  @ApiProperty()
  des_foto_caf: string;

  @ApiProperty()
  tip_foto_caf: string;

  @ApiProperty()
  largura_caf: number;

  @ApiProperty()
  altura_caf: number;

  @ApiProperty()
  tamanho_caf: bigint;

  @ApiProperty()
  ordem_caf: number;

  @ApiProperty()
  dta_foto_caf: Date;

  @ApiProperty()
  cod_lati_caf: string;

  @ApiProperty()
  cod_long_caf: string;

  @ApiProperty()
  cod_cliente: number;

  @ApiProperty()
  contract_id: number;
}
