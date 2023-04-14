import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ContractsService } from './contracts.service';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { cad_contrato } from './entities/contract.entity';

@Controller('contracts')
@ApiTags('contracts')
export class ContractsController {
  constructor(private readonly contractsService: ContractsService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: cad_contrato,
  })
  create(@Body() createContractDto: CreateContractDto) {
    return this.contractsService.create(createContractDto);
  }

  @Get()
  @ApiOkResponse({ type: cad_contrato })
  findAll() {
    return this.contractsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: cad_contrato })
  findOne(@Param('id') id: string) {
    return this.contractsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: cad_contrato })
  update(
    @Param('id') id: string,
    @Body() updateContractDto: UpdateContractDto,
  ) {
    return this.contractsService.update(+id, updateContractDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: cad_contrato })
  remove(@Param('id') id: string) {
    return this.contractsService.remove(+id);
  }
}
