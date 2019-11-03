import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNavBoxComponent } from './mobile-nav-box.component';

describe('MobileNavBoxComponent', () => {
  let component: MobileNavBoxComponent;
  let fixture: ComponentFixture<MobileNavBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileNavBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileNavBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
