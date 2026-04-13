import { Controller, Post, Body, Patch, Param, Get, Query } from '@nestjs/common';
import { EmpleadoService } from './empleado.service';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';

@Controller('empleado')
export class EmpleadoController {
  constructor(private readonly empleadoService: EmpleadoService) { }

  @Post()
  create(@Body() createEmpleadoDto: CreateEmpleadoDto) {
    return this.empleadoService.create(createEmpleadoDto);
  }

  @Patch('actualizar/:id')
  update(@Param('id') id: string, @Body() updateEmpleadoDto: UpdateEmpleadoDto) {
    return this.empleadoService.actualizarEmpleado(+id, updateEmpleadoDto);
  }

  @Get()
  findAll(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
  ) {
    return this.empleadoService.findAll(+page, +limit);
  }
}
