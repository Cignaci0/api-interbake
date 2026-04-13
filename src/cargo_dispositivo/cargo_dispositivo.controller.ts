import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CargoDispositivoService } from './cargo_dispositivo.service';
import { CreateCargoDispositivoDto } from './dto/create-cargo_dispositivo.dto';
import { UpdateCargoDispositivoDto } from './dto/update-cargo_dispositivo.dto';

@Controller('cargo-dispositivo')
export class CargoDispositivoController {
  constructor(private readonly cargoDispositivoService: CargoDispositivoService) {}

  @Post()
  create(@Body() createCargoDispositivoDto: CreateCargoDispositivoDto) {
    return this.cargoDispositivoService.create(createCargoDispositivoDto);
  }

  @Get()
  findAll() {
    return this.cargoDispositivoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cargoDispositivoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCargoDispositivoDto: UpdateCargoDispositivoDto) {
    return this.cargoDispositivoService.update(+id, updateCargoDispositivoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cargoDispositivoService.remove(+id);
  }
}
