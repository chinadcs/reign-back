import { RaidGateModel } from '../../entities/RaidGate/RaidGate';
export interface IRaidGateRepository {
  save(char: RaidGateModel): Promise<void>;
  findById(id: string): Promise<RaidGateModel | null>;
  findAll(): Promise<RaidGateModel[] | null>;
  update(char: RaidGateModel): Promise<void>;
  delete(id: string): Promise<void>;
}
