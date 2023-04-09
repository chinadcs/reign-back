import { DBCharacterRepository } from '@/repositories/Character/CharacterRepository';
import { CharacterModel } from '@/entities/Character/Character';

export class UpdateCharUseCase {
  constructor(private charRepository: DBCharacterRepository) {}

  async execute(char: CharacterModel) {
    await this.charRepository.update(char);
  }
}
