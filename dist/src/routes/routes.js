"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const iqair_controller_1 = require("../controllers/iqair_controller");
const validate_request_1 = require("../middlewares/validate_request");
const iqair_controller = new iqair_controller_1.IQAirController();
const routes = (app) => {
    app.get('/', iqair_controller.welcomePage);
    app.get('/nearest-city/:lat/:long', validate_request_1.ValidateRequest, iqair_controller.nearestCity);
    app.get('/most-polluted-paris-zones', iqair_controller.getMostPollutedDateTime);
};
exports.routes = routes;
//# sourceMappingURL=routes.js.map