import { Component, OnInit } from '@angular/core';
import {
  slideInLeftOnEnterAnimation,
  slideInRightOnEnterAnimation
} from 'angular-animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    slideInLeftOnEnterAnimation({ anchor: 'enter1' }),
    slideInRightOnEnterAnimation({ anchor: 'enter2', delay: 800 }),
    slideInRightOnEnterAnimation({ anchor: 'enter3'}),
    slideInLeftOnEnterAnimation({ anchor: 'enter4', delay: 800  }),
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
