import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagensDoSistemaComponent } from './mensagens-do-sistema.component';

describe('MensagensDoSistemaComponent', () => {
  let component: MensagensDoSistemaComponent;
  let fixture: ComponentFixture<MensagensDoSistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensagensDoSistemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensagensDoSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
