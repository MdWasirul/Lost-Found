import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './config/db.js';
dotenv.config();
import itemRoutes from "./routes/itemRoutes.js"
// Connect to Database
connectDB();
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Test Route
app.get('/test', (req, res) => {
  res.json({ message: 'API is working!' });
});
//Use Routes
app.use("/api/items",itemRoutes);


const PORT = process.env.PORT || 5000 ;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});