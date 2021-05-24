import { Schema, model } from 'mongoose';

const meetingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    date: String,
    startTime: String,
    endTime: String,
    meetingRoom: Schema.Types.ObjectId,
});
export const MEETING_MODEL = 'Meeting';
export const MeetingModel = model(MEETING_MODEL, meetingSchema);
