import { FetchTasksDTO } from './FetchTasksDTO';
import { TaskModel } from '@/entities/Task/Task';
import { TaskRepository } from '@/repositories/Task/TaskRepository';

export class FetchTasksUseCase {
  constructor(private tasksRepository: TaskRepository) {}

  async execute({ id }: FetchTasksDTO): Promise<TaskModel[]> {
    const tasks = await this.tasksRepository.findAll(id);

    if (!tasks) {
      throw new Error('No Taskacters found!');
    }

    return tasks;
  }
}
