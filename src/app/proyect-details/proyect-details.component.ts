import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Proyect } from '../proyect';
import { ProyectService }  from '../proyect.service';

@Component({
  selector: 'app-proyect-details',
  templateUrl: './proyect-details.component.html',
  styleUrls: ['./proyect-details.component.sass']
})

export class ProyectDetailsComponent implements OnInit {

  constructor (
    private route: ActivatedRoute,
    private location: Location,
    private proyectService: ProyectService,
  ) { }

  proyects: Proyect[];
  proyect: Proyect;

  ngOnInit() {
    this.getProyects();
  }

  getProyects(): void {
    this.proyectService.getProyects()
      .subscribe(proyects => this.proyects = proyects);
  }

  /* getProyect(proyect): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.proyectService.getProyect(id)
      .subscribe(proyect => this.proyect = proyect);
  } */

}
