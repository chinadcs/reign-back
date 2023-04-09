import { DBCharacterRepository } from '@/repositories/Character/CharacterRepository';
import { FetchCharUseCase } from './FetchCharUseCase';
import { FetchCharController } from './FetchCharController';

const CharRepository = new DBCharacterRepository();

const fetchCharUseCase = new FetchCharUseCase(CharRepository);

const fetchCharController = new FetchCharController(fetchCharUseCase);

export { fetchCharController };
