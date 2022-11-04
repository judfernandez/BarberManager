import { Component } from '@angular/core';
import {
  fadeInDownOnEnterAnimation,
  fadeInLeftOnEnterAnimation
} from 'angular-animations';

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
  isUser = false;
}
