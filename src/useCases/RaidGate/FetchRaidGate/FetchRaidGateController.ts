import { Request, Response } from 'express';
import { FetchRaidGateUseCase } from './FetchRaidGateUseCase';

export class FetchRaidGateController {
  constructor(private fetchRaidGateUseCase: FetchRaidGateUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params as { id: string };
      console.log(req.query);
      const RaidGate = await this.fetchRaidGateUseCase.execute({ id });
      return res.status(201).json(RaidGate);
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({
        message: err.message || ' Unexprected Error'
      });
    }
  }
}
