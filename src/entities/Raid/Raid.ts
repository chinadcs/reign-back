export class RaidModel {
  public id!: string;
  public name!: string;
  public raidName!: string;
  public gearMin!: number;
  public partySize!: number;
  public gearMax!: number;
  public gates!: number;

  constructor(raidModel: RaidModel) {
    Object.assign(this, raidModel);
  }
}
