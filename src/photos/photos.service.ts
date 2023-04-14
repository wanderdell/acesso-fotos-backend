import { Injectable } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PhotosService {
  constructor(private prisma: PrismaService) {}

  create(createPhotoDto: CreatePhotoDto) {
    return this.prisma.recordPhoto.create({ data: createPhotoDto });
  }

  findAll() {
    return this.prisma.recordPhoto.findMany();
  }

  findOne(id: number) {
    return this.prisma.recordPhoto.findUnique({ where: { cod_foto_caf: id } });
  }

  update(id: number, updatePhotoDto: UpdatePhotoDto) {
    return this.prisma.recordPhoto.update({
      where: { cod_foto_caf: id },
      data: updatePhotoDto,
    });
  }

  remove(id: number) {
    return this.prisma.recordPhoto.delete({ where: { cod_foto_caf: id } });
  }
}
