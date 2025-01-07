import express from 'express';
import dotenv from 'dotenv';
import { initializeDatabase } from './db/data-source';

dotenv.config();

const app = express();
app.use(express.json());

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
