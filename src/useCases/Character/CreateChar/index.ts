import { DBCharacterRepository } from '@/repositories/Character/CharacterRepository';
import { CreateCharUseCase } from './CreateCharUseCase';
import { CreateCharController } from './CreateCharController';

const CharRepository = new DBCharacterRepository();

const createCharUseCase = new CreateCharUseCase(CharRepository);

const createCharController = new CreateCharController(createCharUseCase);

export { createCharController };
