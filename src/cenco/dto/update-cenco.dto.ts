import { PartialType } from '@nestjs/swagger';
import { CreateCencoDto } from './create-cenco.dto';

export class UpdateCencoDto extends PartialType(CreateCencoDto) {}
