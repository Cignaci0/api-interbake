import { CencoService } from './cenco.service';
import { CreateCencoDto } from './dto/create-cenco.dto';
import { UpdateCencoDto } from './dto/update-cenco.dto';
export declare class CencoController {
    private readonly cencoService;
    constructor(cencoService: CencoService);
    create(createCencoDto: CreateCencoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCencoDto: UpdateCencoDto): string;
    remove(id: string): string;
}
