import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TurnoService } from './turno.service';
import { CreateTurnoDto } from './dto/create-turno.dto';
import { UpdateTurnoDto } from './dto/update-turno.dto';

@Controller('turno')
export class TurnoController {
  constructor(private readonly turnoService: TurnoService) {}

  @Post()
  create(@Body() createTurnoDto: CreateTurnoDto) {
    return this.turnoService.create(createTurnoDto);
  }

  @Get()
  findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return this.turnoService.findAll(page, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.turnoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTurnoDto: UpdateTurnoDto) {
    return this.turnoService.update(+id, updateTurnoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.turnoService.remove(+id);
  }
}
