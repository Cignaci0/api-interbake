import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CargoService } from './cargo.service';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';

@Controller('cargo')
export class CargoController {
  constructor(private readonly cargoService: CargoService) {}

  @Post()
  create(@Body() createCargoDto: CreateCargoDto) {
    return this.cargoService.create(createCargoDto);
  }

  @Get()
  findAll(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
  ) {
    return this.cargoService.findAll(+page, +limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cargoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCargoDto: UpdateCargoDto) {
    return this.cargoService.update(+id, updateCargoDto);
  }

  @Delete(':id') 
  remove(@Param('id') id: string) {
    return this.cargoService.remove(+id);
  }
}
