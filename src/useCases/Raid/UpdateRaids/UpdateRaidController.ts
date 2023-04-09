import { RaidModel } from '@/entities/Raid/Raid';
import { Request, Response } from 'express';
import { UpdateRaidUseCase } from './UpdateRaidUseCase';

export class UpdateRaidController {
  constructor(private updateRaidUseCase: UpdateRaidUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, raidName, gates, gearMax, gearMin } = req.body as RaidModel;
    const raid = <RaidModel>{
      name: name,
      raidName: raidName,
      gates: gates,
      gearMin: gearMin,
      gearMax: gearMax
    };

    try {
      await this.updateRaidUseCase.execute(raid);

      return res.status(201).send();
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({
        message: err.message || 'Unexpected Error.'
      });
    }
  }
}
