import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TelemetriaService } from './telemetria.service';

describe('TelemetriaService', () => {
  let service: TelemetriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(TelemetriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
