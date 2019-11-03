import { Component, OnInit } from '@angular/core';
import { PROYECTS } from '../proyects-list';
 
@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.sass']
})

export class ProyectsComponent implements OnInit {

  proyects = PROYECTS;
  url: HTMLCollection

  constructor() { }

  ngOnInit() {
    
  }

}