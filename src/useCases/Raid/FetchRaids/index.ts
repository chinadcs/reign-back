import { FetchRaidsUseCase } from './FetchRaidsUseCase';
import { FetchRaidsController } from './FetchRaidsController';
import { RaidRepository } from '@/repositories/Raid/RaidRepository';

const raidRepository = new RaidRepository();

const fetchRaidsUseCase = new FetchRaidsUseCase(raidRepository);

const fetchRaidsController = new FetchRaidsController(fetchRaidsUseCase);

export { fetchRaidsController };
