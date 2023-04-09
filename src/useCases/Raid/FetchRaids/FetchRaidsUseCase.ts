import { FetchRaidsDTO } from './FetchRaidsDTO';
import { RaidModel } from '@/entities/Raid/Raid';
import { RaidRepository } from '@/repositories/Raid/RaidRepository';

export class FetchRaidsUseCase {
  constructor(private raidsRepository: RaidRepository) {}

  async execute({ id }: FetchRaidsDTO): Promise<RaidModel[]> {
    const raids = await this.raidsRepository.findAll(id);

    if (!raids) {
      throw new Error('No Raidacters found!');
    }

    return raids;
  }
}
