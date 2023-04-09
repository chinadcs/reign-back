import { CreateRaidDTO } from './CreateRaidDTO';
import { CreateRaidUseCase } from './CreateRaidUseCase';
import { Request, Response } from 'express';

export class CreateRaidController {
  constructor(private createRaidUseCase: CreateRaidUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, raidName, gates, gearMax, gearMin, partySize } =
      req.body as CreateRaidDTO;

    const raid = <CreateRaidDTO>{
      name: name,
      raidName: raidName,
      gates: gates,
      gearMin: gearMin,
      gearMax: gearMax,
      partySize: partySize
    };

    try {
      await this.createRaidUseCase.execute(raid);

      return res.status(201).send({ message: 'Raid Created!' });
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({
        message: err.message || 'Unexpected Error.'
      });
    }
  }
}
