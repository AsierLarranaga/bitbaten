import { Component, OnInit, HostListener } from '@angular/core';
import { as_class_manager } from 'src/app/as_modules/as_class_manager';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.sass']
})
export class LogoComponent implements OnInit {

  logo: HTMLElement;
  as_scroll: any;
  windowScrollY: any;

  constructor() { }

  ngOnInit() {

    this.logo = document.getElementById('logo');
    this.as_scroll = new as_class_manager();
    this.windowScrollY = window.scrollY;
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {

    if (window.scrollY > this.windowScrollY && window.scrollY > 300) {

      this.as_scroll.as_toggleElementClass(this.logo, 'logo-position', 'logo-top-position');
      
    } else {
      this.as_scroll.as_toggleElementClass(this.logo, 'logo-top-position', 'logo-position');
    }
    this.windowScrollY = window.scrollY;
  }

}
