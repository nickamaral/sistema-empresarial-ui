import { TestBed } from '@angular/core/testing';

import { ClientesLogService } from './clientes-log.service';

describe('ClientesLogService', () => {
  let service: ClientesLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientesLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
