import { Component } from "@angular/core"
import { Meta, Title } from "@angular/platform-browser";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'AMAR ES VIDA';

  background: string = '../assets/homeBackground/1.webp';
  backgroundN: number = 1;

  termsHidden = true;

  constructor(
    private metaService: Meta,
    private titleService: Title
  ) {
    this.metaService.addTags([
      { name: "description", content: "Ayudas en el amor provee ayuda mediante ciencias ocultas y esoterismo. Hacemos amarres de amor, retornos de pareja, afectos sexuales y dominación total. Entregamos soluciones a problemas de amor, infidelidad, desconfianza, salud, atracción y mucho más" },
      { name: "og:description", content: "Ayudas en el amor provee ayuda mediante ciencias ocultas y esoterismo. Hacemos amarres de amor, retornos de pareja, afectos sexuales y dominación total. Entregamos soluciones a problemas de amor, infidelidad, desconfianza, salud, atracción y mucho más" },
      { name: 'title', content: 'Ayudas en el amor' },
      { name: 'og:title', content: 'Ayudas en el amor' },
      { name: "author", content: "amor es vida desarrolladores" },
      { name: "keywords", content: "amor, ayudas, profesional, profesionales, pareja, amarres, sexualidad, dominacion, dominacion total, afectos sexuales, retorno de pareja, amarres de amor, vida, amor es vida, ocultismo, ciencias ocultas, ocultas, esoterismo" },
      { name: 'robots', content: 'index,follow' },
      { name: 'og:image', content: 'https://amaresvida.com/assets/people/image3.webp' },
      { name: "og:locale", content: "es_AR" },
      { name: "og:type", content: "website" },

      // { name: 'twitter:image', content: '../assets/' },

    ])
    this.titleService.setTitle(this.title)
  }

  ngOnInit() {
    // await this.delay();
    window.addEventListener("scroll", this.reveal);

    // To check the scroll position on page load
    this.reveal();

    //Activate the home background scroll
    this.delay()
    this.preloadImage()
  }

  preloadImage() {
    for (let index = 1; index < 4; index++) {
      let url: string = '../assets/homeBackground/' + index + '.webp';
      console.log("loaded", url)
      var img = new Image();
      img.src = url;

    }
  }
  goTo(url: string) {
    window.open(url, "_blank");
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  delay() {
    setTimeout(() => {
      this.backgroundN += 1;
      if (this.backgroundN == 4) { this.backgroundN = 1; }
      this.background = '../assets/homeBackground/' + this.backgroundN + '.webp';
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
