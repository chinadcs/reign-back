import { TaskModel } from '@/entities/Task/Task';
import { Request, Response } from 'express';
import { UpdateTaskUseCase } from './UpdateTaskUseCase';

export class UpdateTaskController {
  constructor(private updateTaskUseCase: UpdateTaskUseCase) {}

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
    } = req.body as TaskModel;
    const task = <TaskModel>{
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
      await this.updateTaskUseCase.execute(task);

      return res.status(201).send();
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({
        message: err.message || 'Unexpected Error.'
      });
    }
  }
}
