import { Schema, model } from 'mongoose';

const buildingSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
});
export const BUILDING_MODEL = 'Building';
export const BuildingModel = model(BUILDING_MODEL, buildingSchema);
