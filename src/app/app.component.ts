import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var Typed: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  isScrolled = false;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

  slidesStore = [
    {
      id: '1',
      src: 'assets/images/slides/1.jpg',
      title: '1',
      alt: '1'
    },
    {
      id: '2',
      src: 'assets/images/slides/2.jpg',
      title: '2',
      alt: '2'
    },
    {
      id: '3',
      src: 'assets/images/slides/3.jpg',
      title: '3',
      alt: '3'
    },
    {
      id: '1',
      src: 'assets/images/slides/4.jpg',
      title: '1',
      alt: '1'
    },
    {
      id: '1',
      src: 'assets/images/slides/5.jpg',
      title: '1',
      alt: '1'
    },
    {
      id: '1',
      src: 'assets/images/slides/6.jpg',
      title: '1',
      alt: '1'
    },
  ];
  @HostListener("window:scroll", []) onWindowScroll() {
    // do some stuff here when the window is scrolled
    const verticalOffset = window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0;
    this.isScrolled = verticalOffset > 40;
    console.log(verticalOffset);

  }

  ngOnInit() {
    // typing text animation script
    var typed = new Typed(".typing", {
      strings: ["Flutter Developer", "Angular Developer", "Freelancer", "Badminton Player"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });



  }
}