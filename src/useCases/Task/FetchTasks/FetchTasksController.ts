import { Request, Response } from 'express';
import { FetchTasksUseCase } from './FetchTasksUseCase';

export class FetchTasksController {
  constructor(private fetchTasksUseCase: FetchTasksUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params as { id: string };
      console.log(id);
      const Tasks = await this.fetchTasksUseCase.execute({ id });
      return res.status(201).json(Tasks);
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({
        message: err.message || ' Unexprected Error'
      });
    }
  }
}
