import { DBCharacterRepository } from '@/repositories/Character/CharacterRepository';
import { FetchCharsUseCase } from './FetchCharsUseCase';
import { FetchCharsController } from './FetchCharsController';

const CharRepository = new DBCharacterRepository();

const fetchCharsUseCase = new FetchCharsUseCase(CharRepository);

const fetchCharsController = new FetchCharsController(fetchCharsUseCase);

export { fetchCharsController };
