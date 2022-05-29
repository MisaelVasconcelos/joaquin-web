import { Component } from "@angular/core"
import { Meta, Title } from "@angular/platform-browser";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'AMOR ES VIDA';

  background: string = '../assets/homeBackground/1.png';
  backgroundN: number = 1;

  termsHidden = true;

  constructor(
    private metaService: Meta,
    private titleService: Title
  ) {
    this.metaService.addTags([
      { name: "description", content: "Ayudas en el amor mediante ciencias ocultas y esoterismo. Hacemos amarres de amor, retornos de pareja, afectos sexuales y dominación total. Entregamos soluciones a problemas de amor, infidelidad, desconfianza, salud, atracción y mucho más" },
      { property: 'og:title', content: 'Ayudas en el amor' },
      { name: "author", content: "Bruno Jular" },
      { name: "keywords", content: "amor, ayudas, profesional, profesionales, pareja, amarres, sexualidad, dominacion, dominacion total, afectos sexuales, retorno de pareja, amarres de amor, vida, amor es vida, ocultismo, ciencias ocultas, ocultas, esoterismo" },
      { name: 'robots', content: 'index,follow' },

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

  }


  goTo(url: any) {
    window.open(url, "_blank");
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  delay() {
    setTimeout(() => {
      this.backgroundN += 1;
      if (this.backgroundN == 3) { this.backgroundN = 1; }
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
