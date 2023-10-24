import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesFormularioFotoComponent } from './clientes-formulario-foto.component';

describe('ClientesFormularioFotoComponent', () => {
  let component: ClientesFormularioFotoComponent;
  let fixture: ComponentFixture<ClientesFormularioFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesFormularioFotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesFormularioFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
