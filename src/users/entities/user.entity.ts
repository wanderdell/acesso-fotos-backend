import { UserRegistration } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class cad_usuario implements UserRegistration {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  cod_user_usr: number;

  @ApiProperty()
  @Column({ nullable: false, type: 'varchar', length: 50 })
  cod_login_usr: string;

  @ApiProperty()
  @Column({ nullable: false, type: 'varchar', length: 50 })
  des_user_usr: string;

  @ApiProperty()
  @Column({ nullable: false, type: 'varchar', length: 150 })
  cod_email_usr: string;

  @ApiProperty()
  @Column({ nullable: false, type: 'varchar', length: 50 })
  num_fone_usr: string;

  @ApiProperty()
  @Column({ type: 'numeric' })
  cod_situ_usr: number;

  @ApiProperty()
  @Column({ type: 'numeric' })
  usr_ins_usr: number;

  @ApiProperty()
  @Column({ type: 'date' })
  dta_ins_usr: Date;

  @ApiProperty()
  @Column({ nullable: false, type: 'varchar', length: 150 })
  usr_upd_usr: string;

  @ApiProperty()
  @Column({ type: 'date' })
  dta_upd_usr: Date;

  @ApiProperty()
  @Column({ type: 'numeric' })
  cod_cliente: number;

  @ApiProperty()
  @Column({ type: 'numeric' })
  id_admin_usr: number;
}
