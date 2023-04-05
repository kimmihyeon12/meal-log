import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule, NavParams } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
declare var particlesJS: any;

@Component({
  selector: 'app-nav-home',
  templateUrl: 'navHome.page.html',
  styleUrls: ['navHome.page.scss'],
  imports: [IonicModule, CommonModule, RouterLink],
  providers: [NavParams],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavHomePage {
  swiperModules = [IonicSlides];

  sliders: any = ["1", "2", "3", "4"]
  date: String

  constructor(public navParams: NavParams) {
    this.date = navParams.get("date") ?? "오늘 하루";
  }

  slidesOptions: object = {
    initialSlide: 0,
    centeredSlides: true,
    slidesPerView: 1.35,
    loop: true,
    zoom: false
  };

  ngOnInit(): void {
    particlesJS('particles-js', { "particles": { "number": { "value": 223, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#cca2e3" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": true, "anim": { "enable": false, "speed": 1.2, "opacity_min": 0.1, "sync": false } }, "size": { "value": 10, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": false, "distance": 500, "color": "#ffffff", "opacity": 0.4, "width": 2 }, "move": { "enable": true, "speed": 6, "direction": "bottom", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "bubble" }, "onclick": { "enable": true, "mode": "repulse" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 0.5 } }, "bubble": { "distance": 400, "size": 4, "duration": 0.3, "opacity": 1, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true }
    )
  }
}