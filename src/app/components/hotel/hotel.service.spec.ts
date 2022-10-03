/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HotelService } from './hotel.service';

describe('Service: Hotel', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotelService]
    });
  });

  it('should ...', inject([HotelService], (service: HotelService) => {
    expect(service).toBeTruthy();
  }));
});
