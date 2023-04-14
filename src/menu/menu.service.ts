import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MenuService {
  constructor(private prisma: PrismaService) {}

  create(createMenuDto: CreateMenuDto) {
    return this.prisma.tabMenu.create({ data: createMenuDto });
  }

  findAll() {
    return this.prisma.tabMenu.findMany();
  }

  findOne(id: number) {
    return this.prisma.tabMenu.findUnique({ where: { cod_menu_men: id } });
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return this.prisma.tabMenu.update({
      where: { cod_menu_men: id },
      data: updateMenuDto,
    });
  }

  remove(id: number) {
    return this.prisma.tabMenu.delete({ where: { cod_menu_men: id } });
  }
}
