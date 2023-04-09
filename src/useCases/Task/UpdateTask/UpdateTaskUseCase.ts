import { TaskRepository } from '@/repositories/Task/TaskRepository';
import { TaskModel } from '@/entities/Task/Task';

export class UpdateTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute(task: TaskModel) {
    await this.taskRepository.update(task);
  }
}
