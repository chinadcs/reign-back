import { RaidGateModel } from '@/entities/RaidGate/RaidGate';
import { Request, Response } from 'express';
import { UpdateRaidGateUseCase } from './UpdateRaidGateUseCase';

export class UpdateRaidGateController {
  constructor(private updateRaidGateUseCase: UpdateRaidGateUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, raidId, gear, gold, chest } = req.body as RaidGateModel;
    const raidGate = <RaidGateModel>{
      name: name,
      raidId: raidId,
      gear: gear,
      gold: gold,
      chest: chest
    };

    try {
      await this.updateRaidGateUseCase.execute(raidGate);

      return res.status(201).send();
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({
        message: err.message || 'Unexpected Error.'
      });
    }
  }
}
