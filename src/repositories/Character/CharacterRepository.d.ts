import { CharacterModel } from '../../entities/Character/Character';

export interface CharacterRepository {
  save(char: CharacterModel): Promise<void>;
  findById(id: string): Promise<CharacterModel | null>;
  findAll(id?: string | undefined): Promise<CharacterModel[]>;
  update(char: CharacterModel): Promise<void>;
  delete(id: string): Promise<void>;
}
