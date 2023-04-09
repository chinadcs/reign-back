import { FetchTasksUseCase } from './FetchTasksUseCase';
import { FetchTasksController } from './FetchTasksController';
import { TaskRepository } from '@/repositories/Task/TaskRepository';

const taskRepository = new TaskRepository();

const fetchTasksUseCase = new FetchTasksUseCase(taskRepository);

const fetchTasksController = new FetchTasksController(fetchTasksUseCase);

export { fetchTasksController };
