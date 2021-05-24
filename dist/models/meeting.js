"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeetingModel = exports.MEETING_MODEL = void 0;
var mongoose_1 = require("mongoose");
var meetingSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    date: String,
    startTime: String,
    endTime: String,
    meetingRoom: mongoose_1.Schema.Types.ObjectId,
});
exports.MEETING_MODEL = 'Meeting';
exports.MeetingModel = mongoose_1.model(exports.MEETING_MODEL, meetingSchema);
//# sourceMappingURL=meeting.js.map