import { RaidGateRepository } from '@/repositories/RaidGate/RaidGateRepository';
import { CreateRaidGateDTO } from './CreateRaidGateDTO';
import { RaidGateModel } from '@/entities/RaidGate/RaidGate';

export class CreateRaidGateUseCase {
  constructor(private raidgateRepository: RaidGateRepository) {}

  async execute({ name, raidId, gear, gold, chest }: CreateRaidGateDTO) {
    const raidGate = <RaidGateModel>{
      name: name,
      raidId: raidId,
      gear: gear,
      gold: gold,
      chest: chest
    };

    const raidgateModel = new RaidGateModel(raidGate);

    await this.raidgateRepository.save(raidgateModel);
  }
}
