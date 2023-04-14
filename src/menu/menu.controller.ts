import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { tab_menu } from './entities/menu.entity';
@Controller('menu')
@ApiTags('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: tab_menu,
  })
  create(@Body() createMenuDto: CreateMenuDto) {
    return this.menuService.create(createMenuDto);
  }

  @Get()
  @ApiOkResponse({ type: tab_menu })
  findAll() {
    return this.menuService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: tab_menu })
  findOne(@Param('id') id: string) {
    return this.menuService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: tab_menu })
  update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menuService.update(+id, updateMenuDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: tab_menu })
  remove(@Param('id') id: string) {
    return this.menuService.remove(+id);
  }
}
