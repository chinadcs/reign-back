export class UserModel {
  public id!: string;
  public name!: string;
  public email!: string;
  public password?: string;

  constructor(userModel: UserModel) {
    Object.assign(this, userModel);
  }
}
