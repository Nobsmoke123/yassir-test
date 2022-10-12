import { IQAirService } from '../services/iqair.service';
import { Request, Response } from 'express';
import { CronService } from '../services/cron.service';
import moment from 'moment';

const iqair_service = new IQAirService();
const cron_service = new CronService();

export class IQAirController {
  welcomePage(req: Request, res: Response) {
    res.status(200).send('Welcome to >>> IQAir API.');
  }

  async nearestCity(req: Request, res: Response) {
    const { lat, long } = req.params;

    const result = await iqair_service.getNearestCity(lat, long);

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
  }

  async getMostPollutedDateTime(req: Request, res: Response) {
    const result = await cron_service.getMostPollutedData();

    if (result instanceof Error) {
      return res.status(504).json({
        status: 'failed',
        message: 'Oops an error occured!',
      });
    }

    const created_at = result.createdAt;

    return res.status(200).json({
      status: 'success',
      message: `The date and time where Paris is most polluted according to the CRON JOBs is: ${moment
        .parseZone(created_at)
        .format('LLL')}`,
    });
  }
}
