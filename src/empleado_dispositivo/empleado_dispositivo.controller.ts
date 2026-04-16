import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EmpleadoDispositivoService } from './empleado_dispositivo.service';
import { CreateEmpleadoDispositivoDto } from './dto/create-empleado_dispositivo.dto';
import { UpdateEmpleadoDispositivoDto } from './dto/update-empleado_dispositivo.dto';

@Controller('empleado-dispositivo')
export class EmpleadoDispositivoController {
  constructor(private readonly empleadoDispositivoService: EmpleadoDispositivoService) {}

  @Post()
  create(@Body() createEmpleadoDispositivoDto: CreateEmpleadoDispositivoDto) {
    return this.empleadoDispositivoService.create(createEmpleadoDispositivoDto);
  }

  @Get()
  findAll(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
  ) {
    return this.empleadoDispositivoService.findAll(+page, +limit);
  }

}
