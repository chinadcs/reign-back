import { CreateTaskDTO } from './CreateTaskDTO';
import { CreateTaskUseCase } from './CreateTaskUseCase';
import { Request, Response } from 'express';

export class CreateTaskController {
  constructor(private createTaskUseCase: CreateTaskUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const {
      name,
      gearMax,
      gearMin,
      frequency,
      scope,
      days,
      amount,
      icon,
      enabled
    } = req.body as CreateTaskDTO;

    const task = <CreateTaskDTO>{
      name: name,
      gearMin: gearMin,
      gearMax: gearMax,
      frequency: frequency,
      scope: scope,
      days: days,
      amount: amount,
      icon: icon,
      enabled: enabled
    };

    try {
      await this.createTaskUseCase.execute(task);

      return res.status(201).send({ message: 'Task Created!' });
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({
        message: err.message || 'Unexpected Error.'
      });
    }
  }
}
