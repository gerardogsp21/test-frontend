import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMarcaComponent } from './ver-marca.component';

describe('VerMarcaComponent', () => {
  let component: VerMarcaComponent;
  let fixture: ComponentFixture<VerMarcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerMarcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
