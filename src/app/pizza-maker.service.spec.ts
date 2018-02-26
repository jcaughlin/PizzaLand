import { TestBed, inject } from '@angular/core/testing';

import { PizzaMakerService } from './pizza-maker.service';

describe('PizzaMakerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PizzaMakerService]
    });
  });

  it('should be created', inject([PizzaMakerService], (service: PizzaMakerService) => {
    expect(service).toBeTruthy();
  }));
});
