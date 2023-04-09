import { RaidGateRepository } from '@/repositories/RaidGate/RaidGateRepository';
import { DeleteRaidGateUseCase } from './DeleteRaidGateUseCase';
import { DeleteRaidGateController } from './DeleteRaidGateController';

const raidgateRepository = new RaidGateRepository();

const deleteRaidGateUseCase = new DeleteRaidGateUseCase(raidgateRepository);

const deleteRaidGateController = new DeleteRaidGateController(
  deleteRaidGateUseCase
);

export { deleteRaidGateController };
