import { Injectable } from '@nestjs/common';
import { CreateCargoDispositivoDto } from './dto/create-cargo_dispositivo.dto';
import { UpdateCargoDispositivoDto } from './dto/update-cargo_dispositivo.dto';

@Injectable()
export class CargoDispositivoService {
  create(createCargoDispositivoDto: CreateCargoDispositivoDto) {
    return 'This action adds a new cargoDispositivo';
  }

  findAll() {
    return `This action returns all cargoDispositivo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cargoDispositivo`;
  }

  update(id: number, updateCargoDispositivoDto: UpdateCargoDispositivoDto) {
    return `This action updates a #${id} cargoDispositivo`;
  }

  remove(id: number) {
    return `This action removes a #${id} cargoDispositivo`;
  }
}
