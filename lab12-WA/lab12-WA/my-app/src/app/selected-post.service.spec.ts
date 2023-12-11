import { TestBed } from '@angular/core/testing';

import { SelectedPostService } from './selected-post.service';

describe('SelectedPostService', () => {
  let service: SelectedPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
