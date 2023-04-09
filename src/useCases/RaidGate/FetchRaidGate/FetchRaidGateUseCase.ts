import { RaidGateRepository } from '@/repositories/RaidGate/RaidGateRepository';
import { FetchRaidGateDTO } from './FetchRaidGateDTO';

export class FetchRaidGateUseCase {
  constructor(private raidgateRepository: RaidGateRepository) {}

  async execute({ id }: FetchRaidGateDTO) {
    const RaidGate = await this.raidgateRepository.findById(id);

    if (!RaidGate) {
      throw new Error('No RaidGateacter found!');
    }

    return RaidGate;
  }
}
