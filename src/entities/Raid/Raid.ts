export class RaidModel {
  public id!: string;
  public name!: string;
  public gearMin!: number;
  public gearMax!: number;

  constructor(raidModel: RaidModel) {
    Object.assign(this, raidModel);
  }
}
