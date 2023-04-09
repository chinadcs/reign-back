import { FetchRaidGatesDTO } from './FetchRaidGatesDTO';
import { RaidGateModel } from '@/entities/RaidGate/RaidGate';
import { RaidGateRepository } from '@/repositories/RaidGate/RaidGateRepository';

export class FetchRaidGatesUseCase {
  constructor(private raidgatesRepository: RaidGateRepository) {}

  async execute({ id }: FetchRaidGatesDTO): Promise<RaidGateModel[]> {
    const raidgates = await this.raidgatesRepository.findAll(id);

    if (!raidgates) {
      throw new Error('No RaidGateacters found!');
    }

    return raidgates;
  }
}
