import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCargoDispositivoDto } from './dto/create-cargo_dispositivo.dto';
import { UpdateCargoDispositivoDto } from './dto/update-cargo_dispositivo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CargoDispositivo } from './entities/cargo_dispositivo.entity';
import { Cargo } from 'src/cargo/entities/cargo.entity';
import { Dispositivo } from 'src/dispositivo/entities/dispositivo.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class CargoDispositivoService {
  constructor(
    @InjectRepository(CargoDispositivo)
    private readonly cargoDispositivoRepository: Repository<CargoDispositivo>,
    @InjectRepository(Cargo)
    private readonly cargoRepository: Repository<Cargo>,
    @InjectRepository(Dispositivo)
    private readonly dispositivoRepository: Repository<Dispositivo>,
  ) {}
  create(createCargoDispositivoDto: CreateCargoDispositivoDto) {
    return 'This action adds a new cargoDispositivo';
  }

  async findAll(page: number = 1, limit: number = 10) {
    const [data, total] = await this.cargoDispositivoRepository.findAndCount({
      order: {
        id: 'ASC'
      },
      relations:['cargo_id','dispositivo_id'],
      skip: (page - 1) * limit,
      take: limit,
    });

    return {
      data,
      total,
      totalPages: Math.ceil(total / limit),
      page,
    };
  }

 async update(id: number, updateCargoDispositivoDto: UpdateCargoDispositivoDto) {
    const registro = await this.cargoDispositivoRepository.findOne({where:{id:id}})
    if(!registro){
      throw new NotFoundException(`No se encontro ningun registro con el id ${id}`);
    }
    return this.cargoDispositivoRepository.update(id, updateCargoDispositivoDto);
  }

 async remove(id: number) {
  const registro = await this.cargoDispositivoRepository.findOne({where:{id:id}})
  if(!registro){
    throw new NotFoundException(`No se encontro ningun registro con el id ${id}`);
  }
  return this.cargoDispositivoRepository.delete(id);
  }

  async asignacioCargoDispositivo(idCargo:number, idsDispositivos:number[]){
    // 1. Verificar si existe el cargo
    const cargo = await this.cargoRepository.findOne({ where: { cargo_id: idCargo } });
    if (!cargo) {
      throw new NotFoundException(`El cargo con id ${idCargo} no fue encontrado.`);
    }

    // 2. Verificar si existen los dispositivos por cada id que mande
    if (idsDispositivos && idsDispositivos.length > 0) {
      const dispositivos = await this.dispositivoRepository.find({
        where: { dispositivo_id: In(idsDispositivos) }
      });
      
      if (dispositivos.length !== idsDispositivos.length) {
        const idsEncontrados = dispositivos.map(d => d.dispositivo_id);
        const idsFaltantes = idsDispositivos.filter(id => !idsEncontrados.includes(id));
        throw new NotFoundException(`Los siguientes ids de dispositivos no existen: ${idsFaltantes.join(', ')}.`);
      }
    }

    // 3. Eliminar todos los registros de la bd que coincidan con ese id de cargo
    await this.cargoDispositivoRepository
      .createQueryBuilder()
      .delete()
      .where('cargo_id = :idCargo', { idCargo })
      .execute();

    // 4. Ingresar el cargo con los nuevos dispositivos
    if (idsDispositivos && idsDispositivos.length > 0) {
      const nuevosRegistros = idsDispositivos.map(id => {
        return this.cargoDispositivoRepository.create({
          cargo_id: { cargo_id: idCargo } as any,
          dispositivo_id: { dispositivo_id: id } as any,
        });
      });

      return await this.cargoDispositivoRepository.save(nuevosRegistros);
    }

    return [];
  }

  async buscarPorCargo(idCargo: number) {
    const registros = await this.cargoDispositivoRepository
      .createQueryBuilder('cd')
      .leftJoinAndSelect('cd.cargo_id', 'cargo')
      .leftJoinAndSelect('cd.dispositivo_id', 'dispositivo')
      .where('cd.cargo_id = :idCargo', { idCargo })
      .getMany();

    if (!registros || registros.length === 0) {
      throw new NotFoundException(`El cargo con id ${idCargo} no tiene dispositivos asignados.`);
    }

    // Agrupar dispositivos bajo un único objeto cargo
    const result = registros.reduce((acc, registro) => {
      if (!acc.cargo_id) {
        acc.cargo_id = registro.cargo_id;
        acc.dispositivos = [];
      }
      acc.dispositivos.push(registro.dispositivo_id);
      return acc;
    }, {} as { cargo_id: any; dispositivos: any[] });

    return result;
  }
}
