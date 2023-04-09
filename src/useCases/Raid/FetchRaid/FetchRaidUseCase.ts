import { RaidRepository } from '@/repositories/Raid/RaidRepository';
import { FetchRaidDTO } from './FetchRaidDTO';

export class FetchRaidUseCase {
  constructor(private raidRepository: RaidRepository) {}

  async execute({ id }: FetchRaidDTO) {
    const Raid = await this.raidRepository.findById(id);

    if (!Raid) {
      throw new Error('No Raidacter found!');
    }

    return Raid;
  }
}
