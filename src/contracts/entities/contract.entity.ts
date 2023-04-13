import { CustomerContract } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class cad_album implements CustomerContract {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  cod_cont_con: number;

  @ApiProperty()
  @Column({ nullable: false, type: 'numeric' })
  cod_user_con: number;

  @ApiProperty()
  @Column({ type: 'date' })
  dta_evento_con: Date;

  @ApiProperty()
  @Column({ type: 'date' })
  dta_entrega_con: Date;

  @ApiProperty()
  @Column({ nullable: false, type: 'varchar', length: 250 })
  obs_cont_con: string;

  @ApiProperty()
  @Column({ nullable: false, type: 'numeric' })
  cod_anexo_con: number;

  @ApiProperty()
  @Column({ nullable: false, type: 'varchar', length: 250 })
  des_local_con: string;

  @ApiProperty()
  @Column({ nullable: false, type: 'numeric' })
  cod_cliente_cli: number;
}
