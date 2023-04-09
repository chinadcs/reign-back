import { RaidGateRepository } from '@/repositories/RaidGate/RaidGateRepository';
import { RaidGateModel } from '@/entities/RaidGate/RaidGate';

export class UpdateRaidGateUseCase {
  constructor(private raidgateRepository: RaidGateRepository) {}

  async execute(raidGate: RaidGateModel) {
    await this.raidgateRepository.update(raidGate);
  }
}
