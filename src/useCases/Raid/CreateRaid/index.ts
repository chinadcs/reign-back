import { RaidRepository } from '@/repositories/Raid/RaidRepository';
import { CreateRaidUseCase } from './CreateRaidUseCase';
import { CreateRaidController } from './CreateRaidController';

const raidRepository = new RaidRepository();

const createRaidUseCase = new CreateRaidUseCase(raidRepository);

const createRaidController = new CreateRaidController(createRaidUseCase);

export { createRaidController };
