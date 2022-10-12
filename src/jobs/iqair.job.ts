import * as cron from 'node-cron';
import { Logger } from './../config/logger';
import { IQAirService } from './../services/iqair.service';
import { CronService } from './../services/cron.service';

const iqair_service = new IQAirService();
const cron_service = new CronService();

export const CronJob = () =>
  cron.schedule('* * * * *', async () => {
    try {
      Logger.info('Starting the cron job >>>');
      const result = await iqair_service.getAirQualityForParis();
      Logger.info('The result of the axios is: ', result);
      const db_response = await cron_service.saveData(result);
      Logger.info('The result of the db response is: ', result);
      Logger.info('Finished the cron job >>>');
    } catch (error) {
      Logger.error(error);
    }
  });
