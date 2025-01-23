import express from 'express';
import dotenv from 'dotenv';
import { initializeDatabase } from './db/data-source';
import { taskRouter } from './routers/taskRouter';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', taskRouter);

async function start() {
  try {
    await initializeDatabase();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to initialize database:', error);
    process.exit(1);
  }
}

start();
