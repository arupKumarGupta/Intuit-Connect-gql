"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeetingRoomModel = exports.MEETING_Room_MODEL = void 0;
var mongoose_1 = require("mongoose");
var meetingRoomSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    floor: {
        type: Number,
        required: true,
    },
    building: mongoose_1.Schema.Types.ObjectId,
});
exports.MEETING_Room_MODEL = 'MeetingRoom';
exports.MeetingRoomModel = mongoose_1.model(exports.MEETING_Room_MODEL, meetingRoomSchema);
//# sourceMappingURL=meetingRoom.js.map