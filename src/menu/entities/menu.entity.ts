import { TabMenu } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['cod_menu_men'])
export class tab_menu implements TabMenu {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  cod_menu_men: number;

  @ApiProperty()
  @Column({ nullable: false, type: 'varchar', length: 150 })
  des_menu_men: string;

  @ApiProperty()
  @Column({ type: 'numeric' })
  cod_cliente: number;
}
