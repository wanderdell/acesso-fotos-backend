import { RecordPhoto } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class cad_album_foto implements RecordPhoto {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  cod_foto_caf: number;

  @ApiProperty()
  @Column({ type: 'numeric' })
  cod_album_caf: number;

  @ApiProperty()
  @Column({ nullable: false, type: 'varchar', length: 50 })
  des_foto_caf: string;

  @ApiProperty()
  @Column({ nullable: false, type: 'varchar', length: 50 })
  tip_foto_caf: string;

  @ApiProperty()
  @Column({ type: 'numeric' })
  largura_caf: number;

  @ApiProperty()
  @Column({ type: 'numeric' })
  altura_caf: number;

  @ApiProperty()
  @Column({ type: 'numeric' })
  tamanho_caf: bigint;

  @ApiProperty()
  @Column({ type: 'numeric' })
  ordem_caf: number;

  @ApiProperty()
  @Column({ type: 'date' })
  dta_foto_caf: Date;

  @ApiProperty()
  @Column({ nullable: false, type: 'varchar', length: 50 })
  cod_lati_caf: string;

  @ApiProperty()
  @Column({ nullable: false, type: 'varchar', length: 50 })
  cod_long_caf: string;

  @ApiProperty()
  @Column({ type: 'numeric' })
  cod_cliente: number;

  @ApiProperty()
  @Column({ type: 'numeric' })
  contract_id: number;
}
