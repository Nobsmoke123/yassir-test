import express from 'express';
import cors from 'cors';
import { routes } from './routes/routes';
import compression from 'compression';

const app = express();

app.use(express.json());

// Compress server response
app.use(compression());

app.use(
  cors({
    origin: ['http://localhost:3000'],
  })
);

// Import the routes
routes(app);

export default app;
