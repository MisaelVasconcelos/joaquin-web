import { Component, ElementRef, ViewChild } from "@angular/core"

import SwiperCore from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'joaquin-web';

  constructor() {
  }

  onSwiper(swipe:any) {
    console.log('asd');
  }
  onSlideChange() {
    console.log('slide change');
  }
}
