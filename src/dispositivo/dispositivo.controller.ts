import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { DispositivoService } from './dispositivo.service';
import { CreateDispositivoDto } from './dto/create-dispositivo.dto';
import { UpdateDispositivoDto } from './dto/update-dispositivo.dto';

@Controller('dispositivo')
export class DispositivoController {
  constructor(private readonly dispositivoService: DispositivoService) {}

  @Post()
  create(@Body() createDispositivoDto: CreateDispositivoDto) {
    return this.dispositivoService.create(createDispositivoDto);
  }

  @Get()
  findAll(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
  ) {
    return this.dispositivoService.findAll(+page, +limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dispositivoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDispositivoDto: UpdateDispositivoDto) {
    return this.dispositivoService.update(+id, updateDispositivoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dispositivoService.remove(+id);
  }
}
