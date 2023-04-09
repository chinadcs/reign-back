import { FetchRaidGateUseCase } from './FetchRaidGateUseCase';
import { FetchRaidGateController } from './FetchRaidGateController';
import { RaidGateRepository } from '@/repositories/RaidGate/RaidGateRepository';

const raidgateRepository = new RaidGateRepository();

const fetchRaidGateUseCase = new FetchRaidGateUseCase(raidgateRepository);

const fetchRaidGateController = new FetchRaidGateController(
  fetchRaidGateUseCase
);

export { fetchRaidGateController };
