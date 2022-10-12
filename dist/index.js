"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const logger_1 = require("./config/logger");
const port = process.env.PORT;
app_1.default.listen(port, () => {
    logger_1.Logger.info(`Server started on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map