import { Router } from 'express';
import { checkToken } from '@/middlewares/CheckToken';
import { fetchTasksController } from '@/useCases/Task/FetchTasks';
import { fetchTaskController } from '@/useCases/Task/FetchTask';
import { createTaskController } from '@/useCases/Task/CreateTask';
import { deleteTaskController } from '@/useCases/Task/DeleteTask';
import { updateTaskController } from '@/useCases/Task/UpdateTask';

const router = Router();

router.get('/:id', async (res, req) => {
  return fetchTaskController.handle(res, req);
});

router.delete('/:id', async (res, req) => {
  return deleteTaskController.handle(res, req);
});

router.patch('/', async (res, req) => {
  return updateTaskController.handle(res, req);
});

router.post('/', async (res, req) => {
  return createTaskController.handle(res, req);
});

router.get('/', async (res, req) => {
  return fetchTasksController.handle(res, req);
});
export { router as taskRoutes };
