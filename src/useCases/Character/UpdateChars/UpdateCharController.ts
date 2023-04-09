import { CharacterModel } from '@/entities/Character/Character';
import { Request, Response } from 'express';
import { UpdateCharUseCase } from './UpdateCharUseCase';

export class UpdateCharController {
  constructor(private updateCharUseCase: UpdateCharUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id, name, gear, aclass } = req.body as CharacterModel;
    const char = <CharacterModel>{
      id: id,
      name: name,
      gear: gear,
      aclass: aclass
    };

    try {
      await this.updateCharUseCase.execute(char);

      return res.status(201).send();
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({
        message: err.message || 'Unexpected Error.'
      });
    }
  }
}
