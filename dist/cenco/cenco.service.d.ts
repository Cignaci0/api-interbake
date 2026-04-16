import { CreateCencoDto } from './dto/create-cenco.dto';
import { UpdateCencoDto } from './dto/update-cenco.dto';
import { Cenco } from './entities/cenco.entity';
export declare class CencoService {
    private readonly cencoRepository;
    create(createCencoDto: CreateCencoDto): string;
    findAll(page?: number, limit?: number): Promise<{
        data: Cenco[];
        total: number;
        totalPages: number;
        page: number;
    }>;
    findOne(id: number): string;
    update(id: number, updateCencoDto: UpdateCencoDto): string;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
