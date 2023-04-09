import { Request, Response } from 'express';
import { DeleteTaskUseCase } from './DeleteTaskUseCase';

export class DeleteTaskController {
  constructor(private deleteTaskUseCase: DeleteTaskUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params as { id: string };

    try {
      await this.deleteTaskUseCase.execute({ id });

      return res.status(201).send();
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({
        message: err.message || 'Unexpected Error.'
      });
    }
  }
}
