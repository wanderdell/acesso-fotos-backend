import { Injectable } from '@nestjs/common';
import { CreateConstractDto } from './dto/create-constract.dto';
import { UpdateConstractDto } from './dto/update-constract.dto';

@Injectable()
export class ConstractsService {
  create(createConstractDto: CreateConstractDto) {
    return 'This action adds a new constract';
  }

  findAll() {
    return `This action returns all constracts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} constract`;
  }

  update(id: number, updateConstractDto: UpdateConstractDto) {
    return `This action updates a #${id} constract`;
  }

  remove(id: number) {
    return `This action removes a #${id} constract`;
  }
}
