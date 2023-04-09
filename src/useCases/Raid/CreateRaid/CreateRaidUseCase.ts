import { RaidRepository } from '@/repositories/Raid/RaidRepository';
import { CreateRaidDTO } from './CreateRaidDTO';
import { RaidModel } from '@/entities/Raid/Raid';

export class CreateRaidUseCase {
  constructor(private raidRepository: RaidRepository) {}

  async execute({ name, raidName, gates, gearMax, gearMin }: CreateRaidDTO) {
    const raid = <RaidModel>{
      name: name,
      raidName: raidName,
      gates: gates,
      gearMin: gearMin,
      gearMax: gearMax
    };

    const raidModel = new RaidModel(raid);

    await this.raidRepository.save(raidModel);
  }
}
