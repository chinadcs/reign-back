import { FetchRaidGatesUseCase } from './FetchRaidGatesUseCase';
import { FetchRaidGatesController } from './FetchRaidGatesController';
import { RaidGateRepository } from '@/repositories/RaidGate/RaidGateRepository';

const raidgateRepository = new RaidGateRepository();

const fetchRaidGatesUseCase = new FetchRaidGatesUseCase(raidgateRepository);

const fetchRaidGatesController = new FetchRaidGatesController(
  fetchRaidGatesUseCase
);

export { fetchRaidGatesController };
