"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildingModel = exports.BUILDING_MODEL = void 0;
var mongoose_1 = require("mongoose");
var buildingSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
});
exports.BUILDING_MODEL = 'Building';
exports.BuildingModel = mongoose_1.model(exports.BUILDING_MODEL, buildingSchema);
//# sourceMappingURL=building.js.map