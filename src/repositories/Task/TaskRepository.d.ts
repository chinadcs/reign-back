import { TaskModel } from '../../entities/Task/Task';
export interface ITaskRepository {
  save(char: TaskModel): Promise<void>;
  findById(id: string): Promise<TaskModel | null>;
  findAll(): Promise<TaskModel[] | null>;
  update(char: TaskModel): Promise<void>;
  delete(id: string): Promise<void>;
}
