import { Router } from 'express';
import { checkToken } from '@/middlewares/CheckToken';
import { fetchRaidsController } from '@/useCases/Raid/FetchRaids';
import { fetchRaidController } from '@/useCases/Raid/FetchRaid';
import { createRaidController } from '@/useCases/Raid/CreateRaid';
import { deleteRaidController } from '@/useCases/Raid/DeleteRaid';
import { updateRaidController } from '@/useCases/Raid/UpdateRaids';

const router = Router();

router.get('/:id', async (res, req) => {
  return fetchRaidController.handle(res, req);
});

router.delete('/:id', async (res, req) => {
  return deleteRaidController.handle(res, req);
});

router.patch('/', async (res, req) => {
  return updateRaidController.handle(res, req);
});

router.post('/', async (res, req) => {
  return createRaidController.handle(res, req);
});

router.get('/', async (res, req) => {
  return fetchRaidsController.handle(res, req);
});
export { router as raidRoutes };
