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
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("./../src/app"));
const dotenv_1 = __importDefault(require("dotenv"));
// Initialize configuration
dotenv_1.default.config();
describe('Test the welcome page', () => {
    test(`Should return the text 'Welcome to >>> IQAir API.'`, () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.default).get('/').send();
        expect(res.text).toEqual('Welcome to >>> IQAir API.');
        expect(res.statusCode).toEqual(200);
    }));
});
describe('Test the nearest city endpoint.', () => {
    test('Should return an object with a key of Result', () => __awaiter(void 0, void 0, void 0, function* () {
        const lat = 40.73061;
        const long = -73.935242;
        const res = yield (0, supertest_1.default)(app_1.default).get(`/nearest-city/${lat}/${long}`);
        expect(res.body).toHaveProperty('Result');
        expect(res.statusCode).toEqual(200);
    }));
});
//# sourceMappingURL=routes.test.js.map