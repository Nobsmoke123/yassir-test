"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronJob = void 0;
const cron = __importStar(require("node-cron"));
const logger_1 = require("./../config/logger");
const iqair_service_1 = require("./../services/iqair.service");
const cron_service_1 = require("./../services/cron.service");
const iqair_service = new iqair_service_1.IQAirService();
const cron_service = new cron_service_1.CronService();
const CronJob = () => cron.schedule('* * * * *', () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        logger_1.Logger.info('Starting the cron job >>>');
        const result = yield iqair_service.getAirQualityForParis();
        logger_1.Logger.info('The result of the axios is: ', result);
        const db_response = yield cron_service.saveData(result);
        logger_1.Logger.info('The result of the db response is: ', result);
        logger_1.Logger.info('Finished the cron job >>>');
    }
    catch (error) {
        logger_1.Logger.error(error);
    }
}));
exports.CronJob = CronJob;
//# sourceMappingURL=iqair.job.js.map