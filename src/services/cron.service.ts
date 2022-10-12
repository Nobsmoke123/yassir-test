import { Logger } from '../config/logger';
import { IQairInterface } from '../interface/iqair_interface';
import { AirQualityModel } from '../models/air_quality.model';

export class CronService {
  async saveData(data: IQairInterface) {
    try {
      const model = new AirQualityModel(data);
      return await model.save();
    } catch (error) {
      Logger.error(error);
      return error;
    }
  }

  async getMostPollutedData() {
    try {
      const data = await AirQualityModel.find().sort({ aqius: -1 }).limit(1);
      return data;
    } catch (error) {
      Logger.error(error);
      return error;
    }
  }
}
