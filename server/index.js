import dotenv from 'dotenv';
dotenv.config(); // 1. Load the environment variables FIRST

import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import itemRoutes from './routes/itemRoutes.js';
import connectDB from './config/db.js'; // 2. Now it's safe to import this

const app = express();
connectDB();
// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: [
    'http://localhost:5173',
    ' https://lost-found-gules-alpha.vercel.app/',
  ],

  credentials: true
}));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/items', itemRoutes);


// 3. Connect to DB and start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));