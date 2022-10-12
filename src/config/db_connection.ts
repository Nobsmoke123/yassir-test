import mongoose from 'mongoose';
import { Logger } from './logger';

export const connection = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_CONNECTION_STRING}`);
    Logger.info(`Database connected!`);
  } catch (error) {
    Logger.error(error);
    throw error;
  }
};
