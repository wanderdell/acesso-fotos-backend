import { UserRegistration } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UserEntity implements UserRegistration {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password_usr: string;

  @ApiProperty()
  createdAt_usr: Date;

  @ApiProperty()
  updatedAt_usr: Date;

  @ApiProperty()
  user_id: number;
}
