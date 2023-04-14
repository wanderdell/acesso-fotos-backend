import { Injectable } from '@nestjs/common';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContractsService {
  constructor(private prisma: PrismaService) {}

  create(createContractDto: CreateContractDto) {
    return this.prisma.customerContract.create({ data: createContractDto });
  }

  findAll() {
    return this.prisma.customerContract.findMany();
  }

  findOne(id: number) {
    return this.prisma.customerContract.findUnique({
      where: { cod_cont_con: id },
    });
  }

  update(id: number, updateContractDto: UpdateContractDto) {
    return this.prisma.customerContract.update({
      where: { cod_cont_con: id },
      data: updateContractDto,
    });
  }

  remove(id: number) {
    return this.prisma.customerContract.delete({ where: { cod_cont_con: id } });
  }
}
