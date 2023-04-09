import { TaskRepository } from '@/repositories/Task/TaskRepository';
import { FetchTaskDTO } from './FetchTaskDTO';

export class FetchTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute({ id }: FetchTaskDTO) {
    const Task = await this.taskRepository.findById(id);

    if (!Task) {
      throw new Error('No Taskacter found!');
    }

    return Task;
  }
}
