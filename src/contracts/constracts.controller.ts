import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConstractsService } from './constracts.service';
import { CreateConstractDto } from './dto/create-constract.dto';
import { UpdateConstractDto } from './dto/update-constract.dto';

@Controller('constracts')
export class ConstractsController {
  constructor(private readonly constractsService: ConstractsService) {}

  @Post()
  create(@Body() createConstractDto: CreateConstractDto) {
    return this.constractsService.create(createConstractDto);
  }

  @Get()
  findAll() {
    return this.constractsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.constractsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConstractDto: UpdateConstractDto) {
    return this.constractsService.update(+id, updateConstractDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.constractsService.remove(+id);
  }
}
