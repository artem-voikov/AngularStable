import { TestBed, inject } from '@angular/core/testing';

import { FetchServiceService } from './fetch-service.service';

describe('FetchServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchServiceService]
    });
  });

  it('should be created', inject([FetchServiceService], (service: FetchServiceService) => {
    expect(service).toBeTruthy();
  }));
});
