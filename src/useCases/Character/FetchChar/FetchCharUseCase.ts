import { FetchCharDTO } from './FetchCharDTO';
import { DBCharacterRepository } from '@/repositories/Character/CharacterRepository';

export class FetchCharUseCase {
  constructor(private charRepository: DBCharacterRepository) {}

  async execute({ id }: FetchCharDTO) {
    const char = await this.charRepository.findById(id);

    if (!char) {
      throw new Error('No Character found!');
    }

    return char;
  }
}
