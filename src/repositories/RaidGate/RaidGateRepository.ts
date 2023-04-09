import { RaidGateModel } from '@/entities/RaidGate/RaidGate';
import { IRaidGateRepository } from './RaidGateRepository.d';
import { prisma } from 'prisma/prisma';
export class RaidGateRepository implements IRaidGateRepository {
  async save(raidGate: RaidGateModel): Promise<void> {
    await prisma.raidGate.create({
      data: raidGate
    });
  }
  async findAll(id?: string): Promise<RaidGateModel[]> {
    const chars = await prisma.raidGate.findMany();

    return chars;
  }

  async findById(id: string): Promise<RaidGateModel | null> {
    const char = await prisma.raidGate.findUnique({
      where: {
        id: id
      }
    });

    return char;
  }

  async delete(id: string): Promise<void> {
    await prisma.raidGate.delete({
      where: {
        id: id
      }
    });
  }

  async update(char: RaidGateModel): Promise<void> {
    await prisma.raidGate.update({
      where: {
        id: char.id
      },
      data: char
    });
  }
}
