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
exports.IQAirService = void 0;
const axios_1 = __importDefault(require("axios"));
class IQAirService {
    constructor() { }
    getNearestCity(lat, long) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get(`${process.env.BASE_URL}v2/nearest_city?lat=${lat}&lon=${long}&key=${process.env.API_KEY}`);
                const { data, status } = response.data;
                if (data && status == 'success') {
                    const { pollution } = data.current;
                    return pollution;
                }
                return {};
            }
            catch (error) {
                return error;
            }
        });
    }
    getAirQualityForParis() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get(`${process.env.BASE_URL}v2/nearest_city?lat=${process.env.PARIS_LAT}&lon=${process.env.PARIS_LONG}&key=${process.env.API_KEY}`);
                const { data, status } = response.data;
                if (data && status == 'success') {
                    const { pollution } = data.current;
                    return pollution;
                }
                return {};
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.IQAirService = IQAirService;
//# sourceMappingURL=iqair.service.js.map