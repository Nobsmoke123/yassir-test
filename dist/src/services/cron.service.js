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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronService = void 0;
const air_quality_model_1 = require("../models/air_quality.model");
class CronService {
    saveData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const model = new air_quality_model_1.AirQualityModel(data);
                return yield model.save();
            }
            catch (error) {
                return error;
            }
        });
    }
    getMostPollutedData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield air_quality_model_1.AirQualityModel.find().sort({ aqius: -1 }).limit(1);
                return data;
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.CronService = CronService;
//# sourceMappingURL=cron.service.js.map