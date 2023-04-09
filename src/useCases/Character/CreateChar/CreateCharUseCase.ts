import { DBCharacterRepository } from '@/repositories/Character/CharacterRepository';
import { CreateCharDTO } from './CreateCharDTO';
import { CharacterModel } from '@/entities/Character/Character';

export class CreateCharUseCase {
  constructor(private charRepository: DBCharacterRepository) {}

  async execute({ name, userId, gear, aclass }: CreateCharDTO) {
    const char = <CharacterModel>{
      name: name,
      userId: userId,
      gear: gear,
      aclass: aclass
    };

    const charModel = new CharacterModel(char);

    await this.charRepository.save(charModel);
  }
}
