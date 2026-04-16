import { CencoService } from './cenco.service';
import { CreateCencoDto } from './dto/create-cenco.dto';
import { UpdateCencoDto } from './dto/update-cenco.dto';
export declare class CencoController {
    private readonly cencoService;
    constructor(cencoService: CencoService);
    create(createCencoDto: CreateCencoDto): string;
    findAll(query: {
        page?: number;
        limit?: number;
    }): Promise<{
        data: import("./entities/cenco.entity").Cenco[];
        total: number;
        totalPages: number;
        page: number;
    }>;
    findOne(id: string): string;
    update(id: string, updateCencoDto: UpdateCencoDto): string;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
