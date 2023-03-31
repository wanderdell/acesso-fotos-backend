import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @Length(5, 240)
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @Length(5, 240)
  password_usr: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  user_id: number;
}

/*

  id               Int                @id @default(autoincrement())
  email            String             @unique
  password_usr     String
  createdAt_usr    DateTime           @default(now())
  updatedAt_usr    DateTime           @updatedAt
  user_id          Int
*/
