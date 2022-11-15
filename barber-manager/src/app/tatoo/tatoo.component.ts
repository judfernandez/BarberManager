import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TATOO_DB } from '../shared/Mock-DB/tatoo';

@Component({
  selector: 'app-tatoo',
  templateUrl: './tatoo.component.html',
  styleUrls: ['./tatoo.component.scss'],
})
export class TatooComponent implements OnInit {
  recommendedArr = TATOO_DB;
  ratingArr = [1, 2, 3, 4, 5];
  imgArr = [1, 2, 3, 4];
  rating: number = 5;
  ToastMessage: typeof Swal;

  constructor() {
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

  ngOnInit(): void {}

  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  noAvailable() {
    this.ToastMessage.fire({
      icon: 'warning',
      title: 'Función no disponible en este momento',
    });
  }
}
