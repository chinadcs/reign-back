import { DBCharacterRepository } from '@/repositories/Character/CharacterRepository';
import { DeleteCharUseCase } from './DeleteCharUseCase';
import { DeleteCharController } from './DeleteCharController';

const deleteCharRepository = new DBCharacterRepository();

const deleteCharUseCase = new DeleteCharUseCase(deleteCharRepository);

const deleteCharController = new DeleteCharController(deleteCharUseCase);

export { deleteCharController };
