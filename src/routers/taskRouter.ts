import { Router } from 'express';
import { TaskController } from '../controllers/taskController';

const taskRouter = Router();

const taskController = new TaskController();

taskRouter.get('/tasks', async (req, res) => {
  await taskController.getTasks(req, res);
});

taskRouter.post('/tasks', async (req, res) => {
  await taskController.createTask(req, res);
});

taskRouter.delete('/tasks/:id', async (req, res) => {
  await taskController.deleteTask(req, res);
});

export { taskRouter };
