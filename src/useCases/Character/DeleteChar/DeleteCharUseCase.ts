import { DBCharacterRepository } from '@/repositories/Character/CharacterRepository';
import { DeleteCharDTO } from './DeleteCharDTO';

export class DeleteCharUseCase {
  constructor(private charRepository: DBCharacterRepository) {}

  async execute({ id }: DeleteCharDTO) {
    await this.charRepository.delete(id);
  }
}
