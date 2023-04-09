import { FetchTaskUseCase } from './FetchTaskUseCase';
import { FetchTaskController } from './FetchTaskController';
import { TaskRepository } from '@/repositories/Task/TaskRepository';

const taskRepository = new TaskRepository();

const fetchTaskUseCase = new FetchTaskUseCase(taskRepository);

const fetchTaskController = new FetchTaskController(fetchTaskUseCase);

export { fetchTaskController };
