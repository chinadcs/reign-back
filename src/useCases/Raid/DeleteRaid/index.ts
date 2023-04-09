import { RaidRepository } from '@/repositories/Raid/RaidRepository';
import { DeleteRaidUseCase } from './DeleteRaidUseCase';
import { DeleteRaidController } from './DeleteRaidController';

const raidRepository = new RaidRepository();

const deleteRaidUseCase = new DeleteRaidUseCase(raidRepository);

const deleteRaidController = new DeleteRaidController(deleteRaidUseCase);

export { deleteRaidController };
