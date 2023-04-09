import { CreateRaidGateDTO } from './CreateRaidGateDTO';
import { CreateRaidGateUseCase } from './CreateRaidGateUseCase';
import { Request, Response } from 'express';

export class CreateRaidGateController {
  constructor(private createRaidGateUseCase: CreateRaidGateUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, raidId, gear, gold, chest } = req.body as CreateRaidGateDTO;

    const raidGate = <CreateRaidGateDTO>{
      name: name,
      raidId: raidId,
      gear: gear,
      gold: gold,
      chest: chest
    };

    try {
      await this.createRaidGateUseCase.execute(raidGate);

      return res.status(201).send({ message: 'RaidGate Created!' });
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({
        message: err.message || 'Unexpected Error.'
      });
    }
  }
}
