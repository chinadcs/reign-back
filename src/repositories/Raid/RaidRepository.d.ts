import { RaidModel } from './../../entities/Raid/Raid';
export interface IRaidRepository {
  save(char: RaidModel): Promise<void>;
  findById(id: string): Promise<RaidModel | null>;
  findAll(id: string): Promise<RaidModel[] | null>;
  update(char: RaidModel): Promise<void>;
  delete(id: string): Promise<void>;
}
