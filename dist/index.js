"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
// env configurations
dotenv_1.config();
var apollo_server_1 = require("apollo-server");
var models_1 = require("./models");
var db_1 = __importDefault(require("./db"));
var typeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Meeting {\n        id: ID!\n        title: String!\n        meetingRoom: MeetingRoom!\n        date: String!\n        startTime: String!\n        endTime: String!\n    }\n    input MeetingInput {\n        title: String!\n        date: String!\n        startTime: String!\n        endTime: String!\n    }\n    type MeetingRoom {\n        id: ID!\n        name: String!\n        floor: Int!\n        building: Building!\n        meetings: [Meeting!]!\n    }\n    type Building {\n        id: ID!\n        name: String!\n        meetingRooms: [MeetingRoom!]!\n    }\n    type Query {\n        Buildings: [Building!]!\n        MeetingRooms: [MeetingRoom!]!\n        Meetings: [Meeting!]!\n        Building(id: ID!): Building!\n        MeetingRoom(id: ID!): MeetingRoom!\n        Meeting(id: ID!): Meeting!\n    }\n\n    type Mutation {\n        Building(name: String!): Building!\n        MeetingRoom(name: String!, floor: Int!, buildingId: ID!): MeetingRoom!\n        Meeting(meetingInput: MeetingInput, meetingRoomId: ID!): Meeting!\n    }\n"], ["\n    type Meeting {\n        id: ID!\n        title: String!\n        meetingRoom: MeetingRoom!\n        date: String!\n        startTime: String!\n        endTime: String!\n    }\n    input MeetingInput {\n        title: String!\n        date: String!\n        startTime: String!\n        endTime: String!\n    }\n    type MeetingRoom {\n        id: ID!\n        name: String!\n        floor: Int!\n        building: Building!\n        meetings: [Meeting!]!\n    }\n    type Building {\n        id: ID!\n        name: String!\n        meetingRooms: [MeetingRoom!]!\n    }\n    type Query {\n        Buildings: [Building!]!\n        MeetingRooms: [MeetingRoom!]!\n        Meetings: [Meeting!]!\n        Building(id: ID!): Building!\n        MeetingRoom(id: ID!): MeetingRoom!\n        Meeting(id: ID!): Meeting!\n    }\n\n    type Mutation {\n        Building(name: String!): Building!\n        MeetingRoom(name: String!, floor: Int!, buildingId: ID!): MeetingRoom!\n        Meeting(meetingInput: MeetingInput, meetingRoomId: ID!): Meeting!\n    }\n"])));
var resolvers = {
    Query: {
        Buildings: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, models_1.BuildingModel.find()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        Building: function (_, _a) {
            var id = _a.id;
            return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, models_1.BuildingModel.findById(id)];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            }); });
        },
        MeetingRooms: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, models_1.MeetingRoomModel.find()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        MeetingRoom: function (_, _a) {
            var id = _a.id;
            return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, models_1.MeetingRoomModel.findById(id)];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            }); });
        },
        Meetings: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, models_1.MeetingModel.find()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); },
        Meeting: function (_, _a) {
            var id = _a.id;
            return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, models_1.MeetingModel.findById(id)];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            }); });
        },
    },
    Mutation: {
        Building: function (_, _a) {
            var name = _a.name;
            return __awaiter(void 0, void 0, void 0, function () {
                var building;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            building = new models_1.BuildingModel({ name: name });
                            return [4 /*yield*/, building.save()];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        },
        MeetingRoom: function (_, _a) {
            var name = _a.name, floor = _a.floor, buildingId = _a.buildingId;
            return __awaiter(void 0, void 0, void 0, function () {
                var room;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            room = new models_1.MeetingRoomModel({
                                name: name,
                                floor: floor,
                                building: buildingId,
                            });
                            return [4 /*yield*/, room.save()];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        },
        Meeting: function (_, _a) {
            var meetingInput = _a.meetingInput, meetingRoomId = _a.meetingRoomId;
            return __awaiter(void 0, void 0, void 0, function () {
                var meeting;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            meeting = new models_1.MeetingModel(__assign(__assign({}, meetingInput), { meetingRoom: meetingRoomId }));
                            return [4 /*yield*/, meeting.save()];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        },
    },
    Building: {
        meetingRooms: function (_a) {
            var _id = _a._id;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, models_1.MeetingRoomModel.find({ building: _id })];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        },
    },
    MeetingRoom: {
        building: function (_a) {
            var building = _a.building;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, models_1.BuildingModel.findById(building)];
                        case 1: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        },
        meetings: function (_a) {
            var _id = _a._id;
            return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, models_1.MeetingModel.find({ meetingRoom: _id })];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            }); });
        },
    },
    Meeting: {
        meetingRoom: function (_a) {
            var meetingRoom = _a.meetingRoom;
            return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, models_1.MeetingRoomModel.findById(meetingRoom)];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            }); });
        },
    },
};
db_1.default()
    .then(function () {
    console.log('db connection succeeded! starting apollo!');
    var server = new apollo_server_1.ApolloServer({
        cors: {
            origin: '*',
            credentials: true,
        },
        typeDefs: typeDefs,
        resolvers: resolvers,
        context: function (_a) {
            var req = _a.req;
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    return [2 /*return*/, {}];
                });
            });
        },
    });
    // The `listen` method launches a web server.
    server
        .listen({ port: process.env.PORT || 3000 })
        .then(function (_a) {
        var url = _a.url;
        console.log("\uD83D\uDE80  Server ready at " + url);
    })
        .catch(function (err) {
        console.error(err.message);
    });
})
    .catch(function (err) {
    console.error(err.message);
});
var templateObject_1;
//# sourceMappingURL=index.js.map