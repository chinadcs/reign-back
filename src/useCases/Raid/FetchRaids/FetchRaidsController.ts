import { Request, Response } from 'express';
import { FetchRaidsUseCase } from './FetchRaidsUseCase';

export class FetchRaidsController {
  constructor(private fetchRaidsUseCase: FetchRaidsUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params as { id: string };
      console.log(id);
      const Raids = await this.fetchRaidsUseCase.execute({ id });
      return res.status(201).json(Raids);
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({
        message: err.message || ' Unexprected Error'
      });
    }
  }
}
