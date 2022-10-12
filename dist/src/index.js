"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = require("./config/logger");
const iqair_job_1 = require("./jobs/iqair.job");
const db_connection_1 = require("./config/db_connection");
// Initialize configuration
dotenv_1.default.config();
// Set up DB connection
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, db_connection_1.connection)();
}))();
(0, iqair_job_1.CronJob)();
const port = process.env.PORT;
app_1.default.listen(port, () => {
    logger_1.Logger.info(`Server started on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map