import { Router } from 'express';
import { checkToken } from '@/middlewares/CheckToken';
import { fetchCharsController } from '@/useCases/Character/FetchChars';
import { fetchCharController } from '@/useCases/Character/FetchChar';
import { createCharController } from '@/useCases/Character/CreateChar';
import { deleteCharController } from '@/useCases/Character/DeleteChar';
import { updateCharController } from '@/useCases/Character/UpdateChars';

const router = Router();

router.get('/all/:id?', (res, req) => {
  return fetchCharsController.handle(res, req);
});

//TODO:  Create update user, signout, delete
router.get('/:id', async (res, req) => {
  return fetchCharController.handle(res, req);
});

router.delete('/:id', async (res, req) => {
  return deleteCharController.handle(res, req);
});

router.patch('/', async (res, req) => {
  return updateCharController.handle(res, req);
});

router.post('/', async (res, req) => {
  return createCharController.handle(res, req);
});

router.get('/', async (res, req) => {
  return fetchCharsController.handle(res, req);
});
export { router as charRoutes };
