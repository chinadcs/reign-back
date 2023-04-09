import { Request, Response } from 'express';
import { FetchRaidUseCase } from './FetchRaidUseCase';

export class FetchRaidController {
  constructor(private fetchRaidUseCase: FetchRaidUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params as { id: string };
      console.log(req.query);
      const Raid = await this.fetchRaidUseCase.execute({ id });
      return res.status(201).json(Raid);
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({
        message: err.message || ' Unexprected Error'
      });
    }
  }
}
