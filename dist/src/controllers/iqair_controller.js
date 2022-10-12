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
exports.IQAirController = void 0;
const iqair_service_1 = require("../services/iqair.service");
const cron_service_1 = require("../services/cron.service");
const moment_1 = __importDefault(require("moment"));
const iqair_service = new iqair_service_1.IQAirService();
const cron_service = new cron_service_1.CronService();
class IQAirController {
    welcomePage(req, res) {
        res.status(200).send('Welcome to >>> IQAir API.');
    }
    nearestCity(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { lat, long } = req.params;
            const result = yield iqair_service.getNearestCity(lat, long);
            if (result instanceof Error) {
                return res.status(504).json({
                    status: 'failed',
                    message: 'Oops an error occured!',
                });
            }
            return res.status(200).json({
                Result: {
                    Pollution: result,
                },
            });
        });
    }
    getMostPollutedDateTime(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield cron_service.getMostPollutedData();
            if (result instanceof Error) {
                return res.status(504).json({
                    status: 'failed',
                    message: 'Oops an error occured!',
                });
            }
            const created_at = result.createdAt;
            return res.status(200).json({
                status: 'success',
                message: `The date and time where Paris is most polluted according to the CRON JOBs is: ${moment_1.default
                    .parseZone(created_at)
                    .format('LLL')}`,
            });
        });
    }
}
exports.IQAirController = IQAirController;
//# sourceMappingURL=iqair_controller.js.map