import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, Length } from 'class-validator';
export class CreateMenuDto {
  @ApiProperty()
  cod_menu_men: number;

  @ApiProperty()
  des_menu_men: string;

  @ApiProperty()
  cod_cliente: number;
}
