import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMarcaComponent } from './crear-marca.component';

describe('CrearMarcaComponent', () => {
  let component: CrearMarcaComponent;
  let fixture: ComponentFixture<CrearMarcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearMarcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
