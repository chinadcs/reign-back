import { FetchRaidUseCase } from './FetchRaidUseCase';
import { FetchRaidController } from './FetchRaidController';
import { RaidRepository } from '@/repositories/Raid/RaidRepository';

const raidRepository = new RaidRepository();

const fetchRaidUseCase = new FetchRaidUseCase(raidRepository);

const fetchRaidController = new FetchRaidController(fetchRaidUseCase);

export { fetchRaidController };
