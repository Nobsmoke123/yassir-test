import app from './app';
import { Logger } from './config/logger';
import { connection } from './config/db_connection';
import { CronJob } from './jobs/iqair.job';
import dotevn from 'dotenv';
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
