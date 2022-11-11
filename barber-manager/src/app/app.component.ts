import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  fadeInDownOnEnterAnimation,
  fadeInLeftOnEnterAnimation,
} from 'angular-animations';
import Swal from 'sweetalert2';
import { LoginComponent } from './login/login.component';
import { DialogTypeEnum } from './shared/enums';
import { UserDB } from './shared/interfaces';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fadeInDownOnEnterAnimation({ anchor: 'enter1' }),
    fadeInLeftOnEnterAnimation({ anchor: 'enter2', delay: 800 }),
  ],
})
export class AppComponent {
  isLogged = false;
  dialogTypeEnum = DialogTypeEnum;
  ToastMessage: typeof Swal;
  userInfo: UserDB | null = null;

  constructor(public loginDialog: MatDialog, private userService: UserService) {
    this.ToastMessage = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });
  }

  openDialog(dialogType: DialogTypeEnum) {
    const dialogRef = this.loginDialog.open(LoginComponent, {
      width: '500px',
      data: { dialogType },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result && result?.dialogType === DialogTypeEnum.login) {
        const userData = this.userService.loginUser(result);
        if (userData) {
          this.isLogged = true;
          this.userInfo = userData;
          this.ToastMessage.fire({
            icon: 'success',
            title: 'Bienvenido a BarberManager',
          });
        } else {
          this.isLogged = false;
          this.ToastMessage.fire({
            icon: 'error',
            title: 'Los datos que ingreso no son correctos',
          });
        }
      }
      if (result && result?.dialogType === DialogTypeEnum.register) {
        const registerResponse = this.userService.registerUser(result);
        if (registerResponse.statusCode === 500) {
          this.ToastMessage.fire({
            icon: 'error',
            title: registerResponse.message,
          });
        } else {
          this.ToastMessage.fire({
            icon: 'success',
            title: registerResponse.message,
          });
        }
      }
    });
  }
}
