import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { cad_album } from './entities/album.entity';

@Controller('albums')
@ApiTags('albums')
export class AlbumsController {
  constructor(private readonly albumsService: AlbumsService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: cad_album,
  })
  create(@Body() createAlbumDto: CreateAlbumDto) {
    return this.albumsService.create(createAlbumDto);
  }

  @Get()
  @ApiOkResponse({ type: cad_album })
  findAll() {
    return this.albumsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: cad_album })
  findOne(@Param('id') id: string) {
    return this.albumsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: cad_album })
  update(@Param('id') id: string, @Body() updateAlbumDto: UpdateAlbumDto) {
    return this.albumsService.update(+id, updateAlbumDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: cad_album })
  remove(@Param('id') id: string) {
    return this.albumsService.remove(+id);
  }
}
