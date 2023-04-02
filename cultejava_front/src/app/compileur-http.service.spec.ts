import { TestBed } from '@angular/core/testing';

import { CompileurHttpService } from './compileur/compileur-http.service';

describe('CompileurHttpService', () => {
  let service: CompileurHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompileurHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
