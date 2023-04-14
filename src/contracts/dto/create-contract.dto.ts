import { ApiProperty } from '@nestjs/swagger';

export class CreateContractDto {
  @ApiProperty()
  cod_cont_con: number;

  @ApiProperty()
  cod_user_con: number;

  @ApiProperty()
  dta_evento_con: Date;

  @ApiProperty()
  dta_entrega_con: Date;

  @ApiProperty()
  obs_cont_con: string;

  @ApiProperty()
  cod_anexo_con: number;

  @ApiProperty()
  des_local_con: string;

  @ApiProperty()
  cod_cliente_cli: number;
}
