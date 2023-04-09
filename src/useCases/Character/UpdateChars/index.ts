import { DBCharacterRepository } from '@/repositories/Character/CharacterRepository';
import { UpdateCharUseCase } from './UpdateCharUseCase';
import { UpdateCharController } from './UpdateCharController';

const CharRepository = new DBCharacterRepository();

const updateCharUseCase = new UpdateCharUseCase(CharRepository);

const updateCharController = new UpdateCharController(updateCharUseCase);

export { updateCharController };
