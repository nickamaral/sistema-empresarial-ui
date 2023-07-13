import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesSalaFormularioComponent } from './clientes-sala-formulario.component';

describe('ClientesSalaFormularioComponent', () => {
  let component: ClientesSalaFormularioComponent;
  let fixture: ComponentFixture<ClientesSalaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesSalaFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesSalaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
