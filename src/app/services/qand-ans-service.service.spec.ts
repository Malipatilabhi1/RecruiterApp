import { TestBed } from '@angular/core/testing';

import { QandAnsServiceService } from './qand-ans-service.service';

describe('QandAnsServiceService', () => {
  let service: QandAnsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QandAnsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
