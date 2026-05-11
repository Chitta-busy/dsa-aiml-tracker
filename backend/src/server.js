import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { loadEnv } from './config/env.js';
import { connectDB } from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import problemRoutes from './routes/problemRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';

loadEnv();
connectDB();

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());
app.use(morgan('dev'));

app.get('/api/health', (_, res) => res.json({ ok: true }));
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/problems', problemRoutes);
app.use('/api/dashboard', dashboardRoutes);

app.listen(process.env.PORT || 5000, () => console.log(`Backend running on port ${process.env.PORT || 5000}`));
