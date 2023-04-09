import { RaidGateRepository } from '@/repositories/RaidGate/RaidGateRepository';
import { UpdateRaidGateUseCase } from './UpdateRaidGateUseCase';
import { UpdateRaidGateController } from './UpdateRaidGateController';

const raidgateRepository = new RaidGateRepository();

const updateRaidGateUseCase = new UpdateRaidGateUseCase(raidgateRepository);

const updateRaidGateController = new UpdateRaidGateController(
  updateRaidGateUseCase
);

export { updateRaidGateController };
