import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AlbumsService {
  constructor(private prisma: PrismaService) {}

  create(createAlbumDto: CreateAlbumDto) {
    return this.prisma.recordAlbum.create({ data: createAlbumDto });
  }

  findAll() {
    return this.prisma.recordAlbum.findMany();
  }

  findOne(id: number) {
    return this.prisma.recordAlbum.findUnique({ where: { cod_album_alb: id } });
  }

  update(id: number, updateAlbumDto: UpdateAlbumDto) {
    return this.prisma.recordAlbum.update({
      where: { cod_album_alb: id },
      data: updateAlbumDto,
    });
  }

  remove(id: number) {
    return this.prisma.recordAlbum.delete({ where: { cod_album_alb: id } });
  }
}
