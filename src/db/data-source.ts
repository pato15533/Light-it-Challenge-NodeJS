import { DataSource } from 'typeorm';
import { Task } from './entities/Task';
import dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  synchronize: true, // This option is set to true only because this is a small demo. It should be set to false in production
  entities: [Task],
});

export const initializeDatabase = async () => {
  while (true) {
    try {
      await AppDataSource.initialize();
      console.log('Data Source has been initialized!');
      return; // Exit function if the connection is successful
    } catch (err) {
      console.error(`Error during Data Source initialization: ${err}`);
      console.log(`Retrying in 10 seconds...`);
      await new Promise((resolve) => setTimeout(resolve, 10000)); // Retries after 10 seconds
    }
  }
};
