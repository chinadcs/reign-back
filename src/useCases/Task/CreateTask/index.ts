import { TaskRepository } from '@/repositories/Task/TaskRepository';
import { CreateTaskUseCase } from './CreateTaskUseCase';
import { CreateTaskController } from './CreateTaskController';

const taskRepository = new TaskRepository();

const createTaskUseCase = new CreateTaskUseCase(taskRepository);

const createTaskController = new CreateTaskController(createTaskUseCase);

export { createTaskController };
