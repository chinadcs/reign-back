import { Request, Response } from 'express';
import { FetchCharsUseCase } from './FetchCharsUseCase';

export class FetchCharsController {
  constructor(private fetchCharsUseCase: FetchCharsUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params as { id: string };
      console.log(id);
      const chars = await this.fetchCharsUseCase.execute({ id });
      return res.status(201).json(chars);
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({
        message: err.message || ' Unexprected Error'
      });
    }
  }
}
