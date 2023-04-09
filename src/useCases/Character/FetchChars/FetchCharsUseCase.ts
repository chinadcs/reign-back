import { FetchCharsDTO } from './FetchCharsDTO';
import { DBCharacterRepository } from '@/repositories/Character/CharacterRepository';
import { CharacterModel } from '@/entities/Character/Character';

export class FetchCharsUseCase {
  constructor(private charsRepository: DBCharacterRepository) {}

  async execute({ id }: FetchCharsDTO): Promise<CharacterModel[]> {
    const chars = await this.charsRepository.findAll(id);

    if (!chars) {
      throw new Error('No Characters found!');
    }

    return chars;
  }
}
