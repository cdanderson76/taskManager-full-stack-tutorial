import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import taskRoutes from './routes/taskRoute.js';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use('/api/tasks', taskRoutes)

app.listen(5000, () => {
  connectDB();
  console.log(`Server started at http://localhost:${PORT}`);
});