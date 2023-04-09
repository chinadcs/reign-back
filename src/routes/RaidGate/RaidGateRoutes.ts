import { Router } from 'express';
import { checkToken } from '@/middlewares/CheckToken';
import { fetchRaidGatesController } from '@/useCases/RaidGate/FetchRaidGates';
import { fetchRaidGateController } from '@/useCases/RaidGate/FetchRaidGate';
import { createRaidGateController } from '@/useCases/RaidGate/CreateRaidGate';
import { deleteRaidGateController } from '@/useCases/RaidGate/DeleteRaidGate';
import { updateRaidGateController } from '@/useCases/RaidGate/UpdateRaidGates';

const router = Router();

router.get('/:id', async (res, req) => {
  return fetchRaidGateController.handle(res, req);
});

router.delete('/:id', async (res, req) => {
  return deleteRaidGateController.handle(res, req);
});

router.patch('/', async (res, req) => {
  return updateRaidGateController.handle(res, req);
});

router.post('/', async (res, req) => {
  return createRaidGateController.handle(res, req);
});

router.get('/', async (res, req) => {
  return fetchRaidGatesController.handle(res, req);
});
export { router as raidGateRoutes };
