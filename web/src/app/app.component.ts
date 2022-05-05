import { Component, ElementRef, ViewChild } from "@angular/core"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'joaquin-web';

  constructor() {
  }
  goTo(url: any) {
    window.open(url, "_blank");

  }
  onSwiper(swipe: any) {
    console.log('asd');
  }
  onSlideChange() {
    console.log('slide change');
  }
}
