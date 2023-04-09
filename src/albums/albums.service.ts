import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AlbumsService {
  constructor(private prisma: PrismaClient) {}

  create(createAlbumDto: CreateAlbumDto) {
    return this.prisma.recordAlbum.create({ data: createAlbumDto });
  }

  findAll() {
    return this.prisma.recordAlbum.findMany();
  }

  findOne(id: number) {
    return this.prisma.recordAlbum.findUnique({ where: { id } });
  }

  update(id: number, updateAlbumDto: UpdateAlbumDto) {
    return this.prisma.recordAlbum.update({
      where: { id },
      data: updateAlbumDto,
    });
  }

  remove(id: number) {
    return this.prisma.recordAlbum.delete({ where: { id } });
  }
}
