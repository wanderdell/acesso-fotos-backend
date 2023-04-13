import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MenuService {
  constructor(private prisma: PrismaService) {}

  create(createMenuDto: CreateMenuDto) {
    // return this.prisma.tabMenu.create({ data: createMenuDto });
    return;
  }

  findAll() {
    return this.prisma.tabMenu.findMany();
  }

  findOne(id_menu: number) {
    // return this.prisma.tabMenu.findUnique({ where: id_menu });
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return `This action updates a #${id} menu`;
  }

  remove(id: number) {
    return `This action removes a #${id} menu`;
  }
}
