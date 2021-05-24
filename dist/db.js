"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
var mongoose_1 = require("mongoose");
exports.default = (function () {
    return mongoose_1.connect("mongodb+srv://" + process.env.MONGO_USERNAME + ":" + process.env.MONGO_PASSWORD + "@" + process.env.MONGO_HOST + "/" + process.env.DB_NAME + "?retryWrites=true&w=majority");
});
//# sourceMappingURL=db.js.map