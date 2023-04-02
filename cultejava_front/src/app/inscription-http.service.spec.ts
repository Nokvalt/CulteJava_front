import { TestBed } from '@angular/core/testing';

import { InscriptionHttpService } from './inscription/inscription-http.service';

describe('InscriptionHttpService', () => {
  let service: InscriptionHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InscriptionHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
