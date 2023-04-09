import { DeleteRaidDTO } from './DeleteRaidDTO';
import { RaidRepository } from '@/repositories/Raid/RaidRepository';
export class DeleteRaidUseCase {
  constructor(private raidRepository: RaidRepository) {}

  async execute({ id }: DeleteRaidDTO) {
    await this.raidRepository.delete(id);
  }
}
