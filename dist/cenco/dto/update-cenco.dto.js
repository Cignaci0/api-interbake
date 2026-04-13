"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCencoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_cenco_dto_1 = require("./create-cenco.dto");
class UpdateCencoDto extends (0, swagger_1.PartialType)(create_cenco_dto_1.CreateCencoDto) {
}
exports.UpdateCencoDto = UpdateCencoDto;
//# sourceMappingURL=update-cenco.dto.js.map