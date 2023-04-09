export class CharacterModel {
  public id!: string;
  public userId!: string;
  public name!: string;
  public aclass!: string;
  public gear!: number;

  constructor(characterModel: CharacterModel) {
    Object.assign(this, characterModel);
  }
}
