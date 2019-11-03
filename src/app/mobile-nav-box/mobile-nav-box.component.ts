import { Component, OnInit, HostListener } from '@angular/core';
import { as_class_manager } from 'src/app/as_modules/as_class_manager';

@Component({
  selector: 'app-mobile-nav-box',
  templateUrl: './mobile-nav-box.component.html',
  styleUrls: ['./mobile-nav-box.component.sass']
})
export class MobileNavBoxComponent implements OnInit {

  navBox: HTMLElement;
  navUl: HTMLElement;
  as_scroll: any;
  windowScrollY: any;

  constructor() { }

  ngOnInit() {

    this.navBox = document.getElementById('mainNavBox');
    this.navUl = document.getElementById('mainNavMobile');
    this.as_scroll = new as_class_manager();
    this.windowScrollY = window.scrollY;

    (function changeNavBox() {

      const navLi = document.getElementById('mainNavMobile').getElementsByTagName('li');
    
      hideMobileNav(navLi);
    
      const mainNavBox = document.getElementById('mainNavBox');
    
      mainNavBox.addEventListener('click', function() {
    
          mobileBoxAnimation();
          mobileNavAnimation(navLi);
      });
    
      for (let i=0; i<navLi.length; i++) {
    
          navLi[i].addEventListener('click', function() {
    
              mobileBoxAnimation();
              mobileNavAnimation(navLi);
          });
      }
    })();
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {

    if (window.scrollY > this.windowScrollY && window.scrollY > 300) {

      this.as_scroll.as_toggleElementClass(this.navBox, 'nav-position', 'nav-top-position');
      this.as_scroll.as_toggleElementClass(this.navUl, 'ul-position', 'ul-top-position');
      
    } else {
      this.as_scroll.as_toggleElementClass(this.navBox, 'nav-top-position', 'nav-position');
      this.as_scroll.as_toggleElementClass(this.navUl, 'ul-top-position', 'ul-position');
    }
    this.windowScrollY = window.scrollY;
  }

}

function hideMobileNav(navLi) {

  for (let i=0; i<navLi.length; i++) {
      navLi[i].classList.add('hideToRight');
  }
}

function mobileBoxAnimation() {

  const navTopLine = document.getElementById('navTopLine');
  const navCenterLine = document.getElementById('navCenterLine');
  const navBottomLine = document.getElementById('navBottomLine');
  const mainNavMobile = document.getElementById('mainNavMobile');
  let navElement = new as_class_manager();

  if (navTopLine.classList.contains('navTopLine') && navCenterLine.classList.contains('navCenterLine') && navBottomLine.classList.contains('navBottomLine') && mainNavMobile.classList.contains('mainNavMobile')) {

      navElement.as_toggleElementClass(navTopLine, 'navTopLine', 'changeTopLine');
      navElement.as_toggleElementClass(navCenterLine, 'navCenterLine', 'changeCenterLine');
      navElement.as_toggleElementClass(navBottomLine, 'navBottomLine', 'changeBottomLine');
      navElement.as_toggleElementClass(mainNavMobile, 'mainNavMobile', 'changeMainNavMobile');

  } else {

      navElement.as_toggleElementClass(navTopLine, 'changeTopLine', 'navTopLine');
      navElement.as_toggleElementClass(navCenterLine, 'changeCenterLine', 'navCenterLine');
      navElement.as_toggleElementClass(navBottomLine, 'changeBottomLine', 'navBottomLine');
      navElement.as_toggleElementClass(mainNavMobile, 'changeMainNavMobile', 'mainNavMobile');
  }
}

function mobileNavAnimation(navLi) {

  for (let i=0; i<navLi.length; i++) {

      if (navLi[i].classList.contains('hideToRight')) {

          showToLeft(navLi, 150);
      
      } else if (navLi[i].classList.contains('showToLeft')) {

          hideToRight(navLi, 150);
      }
  }
}

function hideToRight(elements, delayTime) {

  for (let i=0; i<elements.length; i++) {

      setTimeout(function() {

          elements[i].classList.remove('showToLeft');
          elements[i].classList.add('hideToRight');
      }, i*delayTime);
  }
}

function showToLeft(elements, delayTime) {

  for (let i=0; i<elements.length; i++) {

      setTimeout(function() {

          elements[i].classList.remove('hideToRight');
          elements[i].classList.add('showToLeft');
      }, i*delayTime);
  }
}
