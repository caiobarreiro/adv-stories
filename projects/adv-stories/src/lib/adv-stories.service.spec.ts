import { TestBed } from '@angular/core/testing';

import { AdvStoriesService } from './adv-stories.service';

describe('AdvStoriesService', () => {
  let service: AdvStoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvStoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
