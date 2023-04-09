import { RaidRepository } from '@/repositories/Raid/RaidRepository';
import { UpdateRaidUseCase } from './UpdateRaidUseCase';
import { UpdateRaidController } from './UpdateRaidController';

const raidRepository = new RaidRepository();

const updateRaidUseCase = new UpdateRaidUseCase(raidRepository);

const updateRaidController = new UpdateRaidController(updateRaidUseCase);

export { updateRaidController };
