import axios from 'axios';

export class IQAirService {
  constructor() {}

  async getNearestCity(lat: string, long: string): Promise<any> {
    try {
      const response = await axios.get(
        `${process.env.BASE_URL}v2/nearest_city?lat=${lat}&lon=${long}&key=${process.env.API_KEY}`
      );
      const { data, status } = response.data;

      if (data && status == 'success') {
        const { pollution } = data.current;
        return pollution;
      }
      return {};
    } catch (error) {
      return error;
    }
  }

  async getAirQualityForParis(): Promise<any> {
    try {
      const response = await axios.get(
        `${process.env.BASE_URL}v2/nearest_city?lat=${process.env.PARIS_LAT}&lon=${process.env.PARIS_LONG}&key=${process.env.API_KEY}`
      );
      const { data, status } = response.data;

      if (data && status == 'success') {
        const { pollution } = data.current;
        return pollution;
      }
      return {};
    } catch (error) {
      return error;
    }
  }
}
