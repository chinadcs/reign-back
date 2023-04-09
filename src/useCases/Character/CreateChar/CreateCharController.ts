import { CreateCharDTO } from './CreateCharDTO';
import { CreateCharUseCase } from './CreateCharUseCase';
import { Request, Response } from 'express';

export class CreateCharController {
  constructor(private createCharUseCase: CreateCharUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, userId, gear, aclass } = req.body as CreateCharDTO;

    const profile = <CreateCharDTO>{
      name: name,
      userId: userId,
      gear: gear,
      aclass: aclass
    };

    try {
      await this.createCharUseCase.execute(profile);

      return res.status(201).send({ message: 'Character Created!' });
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({
        message: err.message || 'Unexpected Error.'
      });
    }
  }
}
