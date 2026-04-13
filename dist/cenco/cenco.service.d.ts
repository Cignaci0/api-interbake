import { CreateCencoDto } from './dto/create-cenco.dto';
import { UpdateCencoDto } from './dto/update-cenco.dto';
export declare class CencoService {
    create(createCencoDto: CreateCencoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCencoDto: UpdateCencoDto): string;
    remove(id: number): string;
}
