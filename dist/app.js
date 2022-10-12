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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes/routes");
const compression_1 = __importDefault(require("compression"));
const dotenv_1 = __importDefault(require("dotenv"));
const iqair_job_1 = require("./jobs/iqair.job");
const db_connection_1 = require("./config/db_connection");
// Initialize configuration
dotenv_1.default.config();
const app = (0, express_1.default)();
// Set up DB connection
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, db_connection_1.connection)();
}))();
app.use((0, cors_1.default)({
    origin: ['http://localhost:3000'],
}));
app.use(express_1.default.json());
// Compress server response
app.use((0, compression_1.default)());
// Import the routes
(0, routes_1.routes)(app);
(0, iqair_job_1.CronJob)();
exports.default = app;
//# sourceMappingURL=app.js.map