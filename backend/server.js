import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';

import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
const ENVIROMENT = process.env.NODE_ENV;

app.use(express.json());

app.get('/', (req, res) => res.send(`API running on ${PORT}`));
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT)
);
app.use(notFound);
app.use(errorHandler);

app.listen(
  PORT,
  console.log(`Server running in ${ENVIROMENT} mode on ${PORT}`.magenta.bold)
);
