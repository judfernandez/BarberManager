import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { BARBERS_DB } from '../shared/Mock-DB/barbers';

@Component({
  selector: 'app-barber',
  templateUrl: './barber.component.html',
  styleUrls: ['./barber.component.scss'],
})
export class BarberComponent implements OnInit {
  recommendedArr = BARBERS_DB;
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
