import { RaidRepository } from '@/repositories/Raid/RaidRepository';
import { RaidModel } from '@/entities/Raid/Raid';

export class UpdateRaidUseCase {
  constructor(private raidRepository: RaidRepository) {}

  async execute(raid: RaidModel) {
    await this.raidRepository.update(raid);
  }
}
