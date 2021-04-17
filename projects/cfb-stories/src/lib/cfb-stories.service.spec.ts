import { TestBed } from '@angular/core/testing';

import { CfbStoriesService } from './cfb-stories.service';

describe('CfbStoriesService', () => {
  let service: CfbStoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CfbStoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
