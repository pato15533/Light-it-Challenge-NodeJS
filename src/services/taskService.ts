import { AppDataSource } from '../db/data-source';
import { Task, TaskStatus } from '../db/entities/Task';

export class TaskService {
  public async getTasks(): Promise<Task[]> {
    const taskRepository = AppDataSource.getRepository(Task);

    return taskRepository.find();
  }

  public async createTask(
    title: string,
    description: string,
    status: TaskStatus
  ): Promise<Task> {
    const taskRepository = AppDataSource.getRepository(Task);

    return taskRepository.save({
      title,
      description,
      status,
    });
  }

  public async deleteTask(id: string): Promise<void> {
    const taskRepository = AppDataSource.getRepository(Task);

    await taskRepository.delete(id);
  }
}
