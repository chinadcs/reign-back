export class TaskModel {
  public id!: string;
  public name!: string;
  public gearMin!: number;
  public gearMax!: number;
  public frequency!: string;
  public scope!: string;
  public days!: string;
  public amount!: number;
  public icon!: string;
  public enabled!: boolean;

  constructor(taskModel: TaskModel) {
    Object.assign(this, taskModel);
  }
}
