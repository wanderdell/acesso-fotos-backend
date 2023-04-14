import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.userRegistration.create({ data: createUserDto });
  }

  findAll() {
    return this.prisma.userRegistration.findMany();
  }

  findOne(id: number) {
    return this.prisma.userRegistration.findUnique({
      where: { cod_user_usr: id },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.userRegistration.update({
      where: { cod_user_usr: id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.prisma.userRegistration.delete({ where: { cod_user_usr: id } });
  }
}
