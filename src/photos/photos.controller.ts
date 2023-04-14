import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PhotosService } from './photos.service';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { cad_album_foto } from './entities/photo.entity';

@Controller('photos')
@ApiTags('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: cad_album_foto,
  })
  create(@Body() createPhotoDto: CreatePhotoDto) {
    return this.photosService.create(createPhotoDto);
  }

  @Get()
  @ApiOkResponse({ type: cad_album_foto })
  findAll() {
    return this.photosService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: cad_album_foto })
  findOne(@Param('id') id: string) {
    return this.photosService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: cad_album_foto })
  update(@Param('id') id: string, @Body() updatePhotoDto: UpdatePhotoDto) {
    return this.photosService.update(+id, updatePhotoDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: cad_album_foto })
  remove(@Param('id') id: string) {
    return this.photosService.remove(+id);
  }
}
