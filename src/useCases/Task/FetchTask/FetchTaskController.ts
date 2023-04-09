import { Request, Response } from 'express';
import { FetchTaskUseCase } from './FetchTaskUseCase';

export class FetchTaskController {
  constructor(private fetchTaskUseCase: FetchTaskUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params as { id: string };
      console.log(req.query);
      const Task = await this.fetchTaskUseCase.execute({ id });
      return res.status(201).json(Task);
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({
        message: err.message || ' Unexprected Error'
      });
    }
  }
}
