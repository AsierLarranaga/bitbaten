import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Proyect } from './proyect';
import { PROYECTS} from './proyects-list';

@Injectable({
  providedIn: 'root'
})
export class ProyectService {

  constructor() { }

  getProyects(): Observable<Proyect[]> {
    return of(PROYECTS);
  }

  getProyect(id: string): Observable<Proyect> {
    return of(PROYECTS.find(proyect => proyect.id === id));
  }

}
