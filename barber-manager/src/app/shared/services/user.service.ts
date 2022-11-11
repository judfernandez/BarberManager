import { Injectable } from '@angular/core';
import { UserRolesEnum } from '../enums';
import { LoginDialogData, UserDB } from '../interfaces';
import { USERS_DB } from '../Mock-DB/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userList: UserDB[] = USERS_DB;
  isLogged = false;

  constructor() {}

  loginUser(data: LoginDialogData): UserDB | null {
    const { email, password } = data;
    const userData = this.userList.find(
      (user) => user.email === email && user.password === password
    );
    if (userData) {
      this.isLogged = true;
      return userData;
    } else {
      this.isLogged = false;
      return null;
    }
  }

  registerUser(data: LoginDialogData): { statusCode: number; message: string } {
    const { name, lastName, email, password } = data;
    const userData = this.userList.find((user) => user.email === email);
    if (!userData) {
      this.userList.push({
        name,
        lastName,
        email,
        password,
        type: UserRolesEnum.client,
      });
      return {
        statusCode: 200,
        message: 'Se usuario ha sido registrado con exito',
      };
    } else {
      return {
        statusCode: 500,
        message: 'El usuario ya se encuentra registrado',
      };
    }
  }
}
