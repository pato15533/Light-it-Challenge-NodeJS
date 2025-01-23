import { Request, Response } from 'express';
import { TaskService } from '../services/taskService';
import { validateTaskData } from '../validators/taskValidator';

export class TaskController {
  private taskService = new TaskService();

  public async getTasks(req: Request, res: Response): Promise<Response> {
    try {
      const data = await this.taskService.getTasks();
      return res.status(200).json({
        tasks: data,
      });
    } catch (err) {
      console.error('Error getting tasks:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
  public async createTask(req: Request, res: Response): Promise<Response> {
    const { body } = req;

    const validation = validateTaskData(body);

    if (validation.success) {
      const newTask = await this.taskService.createTask(
        body.title,
        body.description,
        body.status
      );

      return res.status(201).json({ task: newTask });
    } else {
      return res.status(400).json({ message: validation.error });
    }
  }

  public async deleteTask(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: 'Task ID is required' });
    }

    try {
      await this.taskService.deleteTask(id);
      return res.status(204).send();
    } catch (err) {
      console.error('Error deleting task:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}
