import { DialogTypeEnum, UserRolesEnum } from "./enums";

export class LoginDialogData {
  dialogType?: DialogTypeEnum;
  name?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

export class UserDB {
  name?: string;
  lastName?: string;
  email?: string;
  password?: string;
  type?: UserRolesEnum;
}
