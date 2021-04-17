import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfbStoriesComponent } from './cfb-stories.component';

describe('CfbStoriesComponent', () => {
  let component: CfbStoriesComponent;
  let fixture: ComponentFixture<CfbStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfbStoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CfbStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
