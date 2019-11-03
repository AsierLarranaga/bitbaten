import { Component, OnInit, HostListener } from '@angular/core';
import { as_class_manager } from 'src/app/as_modules/as_class_manager';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  header: HTMLElement;
  as_scroll: any;
  windowScrollY: any;

  constructor() { }

  ngOnInit() {

    this.header = document.getElementById('header');
    this.as_scroll = new as_class_manager();
    this.windowScrollY = window.scrollY;
  }
  
  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {

    if (window.scrollY > 100) {

      this.as_scroll.as_toggleElementClass(this.header, 'header-padding', 'header-no-padding');
      
    } else {
      this.as_scroll.as_toggleElementClass(this.header, 'header-no-padding', 'header-padding');
    }
    this.windowScrollY = window.scrollY;
  }
}
