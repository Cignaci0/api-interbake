import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CencoService } from './cenco.service';
import { CreateCencoDto } from './dto/create-cenco.dto';
import { UpdateCencoDto } from './dto/update-cenco.dto';

@Controller('cenco')
export class CencoController {
  constructor(private readonly cencoService: CencoService) {}

  @Post()
  create(@Body() createCencoDto: CreateCencoDto) {
    return this.cencoService.create(createCencoDto);
  }

  @Get()
  findAll(@Query() query: { page?: number, limit?: number }) {
    return this.cencoService.findAll(query.page, query.limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cencoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCencoDto: UpdateCencoDto) {
    return this.cencoService.update(+id, updateCencoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cencoService.remove(+id);
  }
}
