import app from './app';
import dotevn from 'dotenv';
import { Logger } from './config/logger';
import { CronJob } from './jobs/iqair.job';
import { connection } from './config/db_connection';

// Initialize configuration
dotevn.config();

// Set up DB connection
(async () => {
  await connection();
})();

CronJob();

const port = process.env.PORT;

app.listen(port, () => {
  Logger.info(`Server started on http://localhost:${port}`);
});
