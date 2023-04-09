import { RaidModel } from '@/entities/Raid/Raid';
import { IRaidRepository } from './RaidRepository.d';
import { prisma } from 'prisma/prisma';
export class RaidRepository implements IRaidRepository {
  async save(raid: RaidModel): Promise<void> {
    await prisma.raid.create({
      data: raid
    });
  }
  async findAll(id?: string): Promise<RaidModel[]> {
    const chars = await prisma.raid.findMany();

    return chars;
  }

  async findById(id: string): Promise<RaidModel | null> {
    const char = await prisma.raid.findUnique({
      where: {
        id: id
      }
    });

    return char;
  }

  async delete(id: string): Promise<void> {
    await prisma.raid.delete({
      where: {
        id: id
      }
    });
  }

  async update(char: RaidModel): Promise<void> {
    await prisma.raid.update({
      where: {
        id: char.id
      },
      data: char
    });
  }
}
