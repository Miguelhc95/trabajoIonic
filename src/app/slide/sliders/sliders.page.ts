import { Component, OnInit } from '@angular/core';
import { Router, Scroll } from '@angular/router';

import SwiperCore, { SwiperOptions, Keyboard, Pagination, EffectCube, Swiper } from 'swiper';

SwiperCore.use([Keyboard, Pagination, EffectCube]);

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.page.html',
  styleUrls: ['./sliders.page.scss'],

})
export class SlidersPage implements OnInit {

  public swiperConfig: SwiperOptions = {
    initialSlide: 0,
    pagination: true,
    centeredSlides: true,
    speed: 400
  };

  slides=[
    {
      imageSrc: 'assets/ionic-framework-og.png',
      title: 'Trabajo final',
      subTitle:'Aplicaciones Web Híbridas Angular/Ionic del Máster MIMO 2022/23 - UPSA',
      description:'Esta aplicación ha sido realizada teniendo en cuenta los conocimientos adquiridos en las clases y su posterior práctica e investigación',
    },
    {
      imageSrc: 'assets/silvia.jpg',
      title: 'Autores (I)',
      subTitle:'Silvia Martín Maria',
      description:'Graduada en Ingeniería Informática y especializada en Tratamiento de Datos y BigData',
    },
    {
      imageSrc: 'assets/miguel.jpg',
      title: 'Autores (II)',
      subTitle:'Miguel Hernández Corral',
      description:'Graduado en Ingeniería Informática con Mención Especial en Tecnologías de la Información - Desarrollador de Software',
    },
    {
      imageSrc: 'assets/logo-upsa.png',
      title: 'Universidad Pontificia de Salamanca',
      subTitle:'Todos los derechos reservados.',
      description:'Máster MIMO 2022-2023',
    }
  ];


  constructor(
    private router: Router) { }

  ngOnInit() {
    Swiper.use([Pagination]);
  }

  toHome() {
    this.router.navigate(['/home']);

  }
}
