import { Request, Response } from 'express';
import { DeleteRaidUseCase } from './DeleteRaidUseCase';

export class DeleteRaidController {
  constructor(private deleteRaidUseCase: DeleteRaidUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params as { id: string };

    try {
      await this.deleteRaidUseCase.execute({ id });

      return res.status(201).send();
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({
        message: err.message || 'Unexpected Error.'
      });
    }
  }
}
