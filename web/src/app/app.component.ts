import { Component, ElementRef, ViewChild } from "@angular/core"
import { delay } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'joaquin-web';

  background = '../assets/homeBackground/1.png';
  backgroundN = 1;

  termsHidden=true;

  constructor() {
  }
  
  ngOnInit() {
    // await this.delay();
    window.addEventListener("scroll", this.reveal);

    // To check the scroll position on page load
    this.reveal();
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

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth'});
  }

  wp() {
    // open whatsapp and send message
    window.open('https://wa.me/+5493512613917?text=Im%20interested%20in%20your%20car%20for%20sale', '_blank');
  }
  
  delay() {
    setTimeout (() => {
      console.log("Hello from setTimeout");
      this.backgroundN += 1;
      if(this.backgroundN == 3) {this.backgroundN = 1;}
      this.background = '../assets/homeBackground/' + this.backgroundN + '.png';
      this.delay();
    }, 3000);
  }

  reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
}
