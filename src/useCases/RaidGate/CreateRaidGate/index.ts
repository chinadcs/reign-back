import { RaidGateRepository } from '@/repositories/RaidGate/RaidGateRepository';
import { CreateRaidGateUseCase } from './CreateRaidGateUseCase';
import { CreateRaidGateController } from './CreateRaidGateController';

const raidgateRepository = new RaidGateRepository();

const createRaidGateUseCase = new CreateRaidGateUseCase(raidgateRepository);

const createRaidGateController = new CreateRaidGateController(
  createRaidGateUseCase
);

export { createRaidGateController };
