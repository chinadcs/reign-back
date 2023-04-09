import { TaskRepository } from '@/repositories/Task/TaskRepository';
import { UpdateTaskUseCase } from './UpdateTaskUseCase';
import { UpdateTaskController } from './UpdateTaskController';

const taskRepository = new TaskRepository();

const updateTaskUseCase = new UpdateTaskUseCase(taskRepository);

const updateTaskController = new UpdateTaskController(updateTaskUseCase);

export { updateTaskController };
