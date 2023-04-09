import { Request, Response } from 'express';
import { FetchCharUseCase } from './FetchCharUseCase';

export class FetchCharController {
  constructor(private fetchCharUseCase: FetchCharUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params as { id: string };
      console.log(req.query);
      const char = await this.fetchCharUseCase.execute({ id });
      return res.status(201).json(char);
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({
        message: err.message || ' Unexprected Error'
      });
    }
  }
}
