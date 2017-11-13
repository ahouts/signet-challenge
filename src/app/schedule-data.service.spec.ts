import { TestBed, inject } from '@angular/core/testing';

import { ScheduleDataService } from './schedule-data.service';

describe('ScheduleDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScheduleDataService]
    });
  });

  it('should be created', inject([ScheduleDataService], (service: ScheduleDataService) => {
    expect(service).toBeTruthy();
  }));
});
