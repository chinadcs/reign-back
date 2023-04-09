import { TaskRepository } from '@/repositories/Task/TaskRepository';
import { CreateTaskDTO } from './CreateTaskDTO';
import { TaskModel } from '@/entities/Task/Task';

export class CreateTaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async execute({ name, taskName, gates, gearMax, gearMin }: CreateTaskDTO) {
    const task = <TaskModel>{
      name: name,
      taskName: taskName,
      gates: gates,
      gearMin: gearMin,
      gearMax: gearMax
    };

    const taskModel = new TaskModel(task);

    await this.taskRepository.save(taskModel);
  }
}
