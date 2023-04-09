export class RaidGateModel {
  public id!: string;
  public name!: string;
  public raidId!: string;
  public gear!: number;
  public gold!: number;
  public chest!: number;

  constructor(raidGateModel: RaidGateModel) {
    Object.assign(this, raidGateModel);
  }
}
