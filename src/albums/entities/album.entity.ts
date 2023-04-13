import { RecordAlbum } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

import { Entity, Unique, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
@Unique(['id'])
export class cad_album implements RecordAlbum {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  cod_album_alb: number;

  @Column({ nullable: false, type: 'varchar', length: 250 })
  @ApiProperty()
  des_album_alb: string;

  @Column({ nullable: false, type: 'varchar' })
  @ApiProperty()
  obs_album_alb: string;

  @Column({ type: 'date' })
  @ApiProperty()
  dta_evento_alb: Date;

  @Column({ type: 'date' })
  @ApiProperty()
  cod_situ_alb: number;

  @Column({ type: 'numeric' })
  @ApiProperty()
  cod_cliente: number;

  @Column({ type: 'numeric' })
  @ApiProperty()
  album_id: number;

  @Column({ type: 'numeric' })
  @ApiProperty()
  contract_id: number;
}
