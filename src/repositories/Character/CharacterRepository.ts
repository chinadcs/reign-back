import { CharacterModel } from '@/entities/Character/Character';
import { CharacterRepository } from './CharacterRepository.d';
import { prisma } from 'prisma/prisma';
export class DBCharacterRepository implements CharacterRepository {
  async save(char: CharacterModel): Promise<void> {
    await prisma.character.create({
      data: {
        name: char.name,
        gear: char.gear,
        aclass: char.aclass,
        user: {
          connect: {
            id: char.userId
          }
        }
      }
    });
  }
  async findAll(id?: string): Promise<CharacterModel[]> {
    if (id) {
      const chars = await prisma.character.findMany({
        where: {
          userId: id
        }
      });

      return chars;
    }
    const chars = await prisma.character.findMany();

    return chars;
  }

  async findById(id: string): Promise<CharacterModel | null> {
    const char = await prisma.character.findUnique({
      where: {
        id: id
      }
    });

    return char;
  }

  async delete(id: string): Promise<void> {
    await prisma.character.delete({
      where: {
        id: id
      }
    });
  }

  async update(char: CharacterModel): Promise<void> {
    await prisma.character.update({
      where: {
        id: char.id
      },
      data: char
    });
  }
}
