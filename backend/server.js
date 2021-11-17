import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';

import productRoutes from './routes/productRoutes.js';

dotenv.config();
connectDB();

const app = express();

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
const ENVIROMENT = process.env.NODE_ENV;

app.get('/', (req, res) => res.send(`API running on ${PORT}`));

app.listen(
  PORT,
  console.log(`Server running in ${ENVIROMENT} mode on ${PORT}`.magenta.bold)
);
