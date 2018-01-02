import {TestBed, inject} from '@angular/core/testing';

import {RouteNavigatorService} from './route-navigator.service';

describe('RouteNavigatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteNavigatorService]
    });
  });

  it('should be created', inject([RouteNavigatorService], (service: RouteNavigatorService) => {
    expect(service).toBeTruthy();
  }));
});
