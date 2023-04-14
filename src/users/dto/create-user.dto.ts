import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  cod_user_usr: number;

  @ApiProperty()
  cod_login_usr: string;

  @ApiProperty()
  des_user_usr: string;

  @ApiProperty()
  cod_email_usr: string;

  @ApiProperty()
  num_fone_usr: string;

  @ApiProperty()
  cod_situ_usr: number;

  @ApiProperty()
  usr_ins_usr: number;

  @ApiProperty()
  dta_ins_usr: Date;

  @ApiProperty()
  usr_upd_usr: string;

  @ApiProperty()
  dta_upd_usr: Date;

  @ApiProperty()
  cod_cliente: number;

  @ApiProperty()
  id_admin_usr: number;
}
