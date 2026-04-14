import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetalleTurnoService } from './detalle_turno.service';
import { CreateDetalleTurnoDto } from './dto/create-detalle_turno.dto';
import { UpdateDetalleTurnoDto } from './dto/update-detalle_turno.dto';

@Controller('detalle-turno')
export class DetalleTurnoController {
  constructor(private readonly detalleTurnoService: DetalleTurnoService) {}

  @Post('asignacion')
  asignacion(
    @Body('turno_id') turnoId: number,
    @Body('cod_dia') codDias: number[],
    @Body('horario_id') idsHorarios: number[],
  ) {
    return this.detalleTurnoService.asignacionDetalleTurno(turnoId, codDias, idsHorarios);
  }

  @Post()
  create(@Body() createDetalleTurnoDto: CreateDetalleTurnoDto) {
    return this.detalleTurnoService.create(createDetalleTurnoDto);
  }

  @Get()
  findAll() {
    return this.detalleTurnoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detalleTurnoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetalleTurnoDto: UpdateDetalleTurnoDto) {
    return this.detalleTurnoService.update(+id, updateDetalleTurnoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detalleTurnoService.remove(+id);
  }
}

