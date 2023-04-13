import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, Length } from 'class-validator';
export class CreateMenuDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  id_menu: number;

  @ApiProperty()
  @IsNotEmpty()
  @Length(5, 200)
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(5, 200)
  description: string;

  @ApiProperty()
  @IsUUID()
  user_id: number;
}

/*
  id_menu              Int                    @id
  name                 String
  description          String
  createdAt            DateTime               @default(now())
  updatedAt            DateTime               @updatedAt
  user_id              Int
  user                 UserRegistration       @relation(fields: [user_id], references: [id_usr])
  UserMenuRelationship UserMenuRelationship[]
  */
