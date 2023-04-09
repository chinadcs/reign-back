import { DeleteRaidGateDTO } from './DeleteRaidGateDTO';
import { RaidGateRepository } from '@/repositories/RaidGate/RaidGateRepository';
export class DeleteRaidGateUseCase {
  constructor(private raidgateRepository: RaidGateRepository) {}

  async execute({ id }: DeleteRaidGateDTO) {
    await this.raidgateRepository.delete(id);
  }
}
