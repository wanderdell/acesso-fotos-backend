import { Injectable } from '@nestjs/common';
import { CreateConstractDto } from './dto/create-constract.dto';
import { UpdateConstractDto } from './dto/update-constract.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ConstractsService {
  constructor(private prisma: PrismaClient) {}

  create(createConstractDto: CreateConstractDto) {
    return this.prisma.customerContract.create({ data: createConstractDto });
  }

  findAll() {
    return this.prisma.customerContract.findMany({});
  }

  findOne(id: number) {
    return this.prisma.customerContract.findUnique({ where: { id } });
  }

  update(id: number, updateConstractDto: UpdateConstractDto) {
    return this.prisma.customerContract.update({
      where: { id },
      data: updateConstractDto,
    });
  }

  remove(id: number) {
    return this.prisma.customerContract.delete({ where: { id } });
  }
}
