import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectComponent } from './proyects.component';

describe('ProyectComponent', () => {
  let component: ProyectComponent;
  let fixture: ComponentFixture<ProyectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
