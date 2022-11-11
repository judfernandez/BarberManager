import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogTypeEnum } from '../shared/enums';
import { LoginDialogData } from '../shared/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  title = '';
  isLogin = false;
  tabList = ['Unirse', 'Ingresar'];
  activeTab = 1;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LoginDialogData
  ) {
    this.isLogin = data.dialogType === DialogTypeEnum.login;
    this.activeTab = this.isLogin ? 1 : 0;
  }

  changeTab(index: number) {
    this.activeTab = index;
    this.data.dialogType = index;
    this.isLogin = index === DialogTypeEnum.login;
  }

  ngOnInit(): void {}
}
