import { DeleteTaskDTO } from './DeleteTaskDTO';
import { TaskRepository } from '@/repositories/Task/TaskRepository';
export class DeleteTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute({ id }: DeleteTaskDTO) {
    await this.taskRepository.delete(id);
  }
}
