import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesLogComponent } from './clientes-log.component';

describe('ClientesLogComponent', () => {
  let component: ClientesLogComponent;
  let fixture: ComponentFixture<ClientesLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
