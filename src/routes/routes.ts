import { Application } from 'express';
import { IQAirController } from '../controllers/iqair_controller';
import { ValidateRequest } from '../middlewares/validate_request';

const iqair_controller = new IQAirController();

export const routes = (app: Application) => {
  app.get('/', iqair_controller.welcomePage);

  app.get(
    '/nearest-city/:lat/:long',
    ValidateRequest,
    iqair_controller.nearestCity
  );

  app.get(
    '/most-polluted-paris-zones',
    iqair_controller.getMostPollutedDateTime
  );
};
