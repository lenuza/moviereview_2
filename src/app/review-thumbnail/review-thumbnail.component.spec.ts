import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewThumbnailComponent } from './review-thumbnail.component';

describe('ReviewThumbnailComponent', () => {
  let component: ReviewThumbnailComponent;
  let fixture: ComponentFixture<ReviewThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
