import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalasFormularioComponent } from './salas-formulario.component';

describe('SalasFormularioComponent', () => {
  let component: SalasFormularioComponent;
  let fixture: ComponentFixture<SalasFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalasFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalasFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
