import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesBuscaComponent } from './clientes-busca.component';

describe('ClientesBuscaComponent', () => {
  let component: ClientesBuscaComponent;
  let fixture: ComponentFixture<ClientesBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesBuscaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
