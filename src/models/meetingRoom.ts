import { Schema, model } from 'mongoose';
const meetingRoomSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    floor: {
        type: Number,
        required: true,
    },
    building: Schema.Types.ObjectId,
});
export const MEETING_Room_MODEL = 'MeetingRoom';
export const MeetingRoomModel = model(MEETING_Room_MODEL, meetingRoomSchema);
