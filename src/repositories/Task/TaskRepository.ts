import { TaskModel } from '@/entities/Task/Task';
import { ITaskRepository } from './TaskRepository.d';
import { prisma } from 'prisma/prisma';
export class TaskRepository implements ITaskRepository {
  async save(task: TaskModel): Promise<void> {
    await prisma.tasks.create({
      data: task
    });
  }
  async findAll(): Promise<TaskModel[]> {
    const tasks = await prisma.tasks.findMany();

    return tasks;
  }

  async findById(id: string): Promise<TaskModel | null> {
    const task = await prisma.tasks.findUnique({
      where: {
        id: id
      }
    });

    return task;
  }

  async delete(id: string): Promise<void> {
    await prisma.tasks.delete({
      where: {
        id: id
      }
    });
  }

  async update(task: TaskModel): Promise<void> {
    await prisma.tasks.update({
      where: {
        id: task.id
      },
      data: task
    });
  }
}
