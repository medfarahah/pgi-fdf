import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/apiRoutes.js';
import { requestLogger } from './middleware/requestLogger.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(cors());
app.use(express.json());

// Log incoming API requests
app.use(requestLogger);

// Mount API routing
app.use('/api', apiRoutes);

// Global Exception Handler
app.use(errorHandler);

export default app;
