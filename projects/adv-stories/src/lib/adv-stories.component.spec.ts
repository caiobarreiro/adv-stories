import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvStoriesComponent } from './adv-stories.component';

describe('AdvStoriesComponent', () => {
  let component: AdvStoriesComponent;
  let fixture: ComponentFixture<AdvStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvStoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
